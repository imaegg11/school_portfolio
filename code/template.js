let clipboard = '<svg class="clipboard-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#abb2bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>'
let checkmark = '<svg class="clipboard-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#abb2bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>'
// let funny = '<img src=a onerror="window.open(\'https://www.youtube.com/watch?v=dQw4w9WgXcQ\')">'

let clipboard_codes = new Array();

let format_code = async () => {
    let code_blocks = document.getElementsByTagName("code");
    for (let i = 0; i < code_blocks.length; i++) {
        let e = code_blocks[i];
        let data = document.createAttribute("data-clipboard");
        let index = document.createAttribute("data-index");
        let code_cont = document.createElement("div");
        code_cont.classList.add("code_cont");
        index.value = i;
        data.value = e.innerText;
        e.classList.add("hljs");
        e.setAttributeNode(index);
        e.setAttributeNode(data);
        let new_text = e.innerText.split("\n").map((line, index) => {return `${index+1}.${line}`});
        e.innerHTML = "";
        let obj = await hljs.highlight("java", new_text.join("\n"));
        code_cont.innerHTML = obj.value;
        e.appendChild(code_cont);
    }

    let numbers = document.getElementsByClassName("hljs-number");

    for (let number of numbers) {
        if (/^\d+\.$/.test(number.innerText)) {
            number.classList.add("number");
            if (number.innerText == "1.") {
                let parent = number.parentNode.parentNode;
                // https://stackoverflow.com/questions/5882768/how-to-append-a-childnode-to-a-specific-position
                parent.insertBefore(document.createElement("hr"), parent.firstChild);
                let child = document.createElement("div");
                let file_title = document.createElement("div")
                child.classList.add("file-name");
                file_title.innerHTML += parent.dataset.fileName;
                child.appendChild(file_title);
                parent.insertBefore(child, parent.childNodes[0]);

                parent = parent.childNodes[0];
                let clipboard_child = document.createElement("div");
                clipboard_child.classList.add("clipboard");
                clipboard_child.style.cursor = "pointer";
                clipboard_child.innerHTML = clipboard;
                clipboard_child.addEventListener("click", (event) => {
                    let e = event.currentTarget;
                    let index = e.parentNode.parentNode.dataset.index;

                    clearTimeout(clipboard_codes[index]);
                    e.innerHTML = checkmark;
                    navigator.clipboard.writeText(e.parentNode.parentNode.dataset.clipboard);
                    
                    let timeOut = setTimeout(() => {
                        e.innerHTML = clipboard;
                    }, 3000);
                    clipboard_codes[index] = timeOut;
                });
                parent.appendChild(clipboard_child);

            }
            number.innerText = number.innerText.substring(0, number.innerText.length-1) + " ".repeat(5 - number.innerText.length);
        }
    }
}

let create_code_block = (parent, content, file_name) => {
    let child_pre = document.createElement("pre");
    let child_code = document.createElement("code");
    let data = document.createAttribute("data-file-name");
    data.value = file_name;
    child_code.classList.add("language-java");
    child_code.innerText = content;
    child_code.setAttributeNode(data);

    child_pre.appendChild(child_code);
    parent.appendChild(child_pre);
}

let create_title = (parent, content) => {
    let child = document.createElement("p");
    child.classList.add("title");
    child.innerText = content;
    parent.appendChild(child);
}

let create_body = (parent, content) => {
    let child = document.createElement("p");
    child.classList.add("body-text");
    child.innerText = content;
    parent.appendChild(child);
}

let create_subtitle = (parent, content) => {
    let child = document.createElement("p");
    child.classList.add("subtitle");
    child.innerText = content;
    parent.appendChild(child);
}

let create_list = (parent, items) => {
    let child = document.createElement("ol");
    for (let item of items) {
        let list_item = document.createElement("li");
        list_item.innerText = item;
        child.appendChild(list_item);
    }
    parent.appendChild(child);
    child.classList.add("list");
}

let create = (items) => {

    clipboard_codes = new Array(items.length);

    let parent = document.getElementById("content");
    for (let i of items) {
        if (i.type == "code") {
            i.format();
            create_code_block(parent, i.content, i.file_name);
        } else if (i.type == "title") {
            create_title(parent, i.content);
        } else if (i.type == "body") {
            create_body(parent, i.content);
        } else if (i.type == "subtitle") {
            create_subtitle(parent, i.content);
        }  else if (i.type == "list") {
            create_list(parent, i.content);
        }
    }
    
    format_code();
}


let resize_function = (event) => {
    let windowHeight = window.innerHeight;
    let pageHeight = document.body.scrollHeight;
    let back_to_top = document.getElementById("back-to-top");
    if (windowHeight * 1.2 > pageHeight) {
        back_to_top.classList.add("hide");
    } else {
        back_to_top.classList.remove("hide");
    }
}

window.addEventListener("resize", resize_function);
window.addEventListener("load", resize_function);
