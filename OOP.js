let clipboard = '<svg class="clipboard-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#abb2bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>'
let checkmark = '<svg class="clipboard-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#abb2bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>'
// let funny = '<img src=a onerror="window.open(\'https://www.youtube.com/watch?v=dQw4w9WgXcQ\')">'

// https://stackoverflow.com/questions/502366/structs-in-javascript
function createStruct(names) {
    let ids = names.split(' ');
    let count = names.length;
   
    function constructor() {
        for (let i = 0; i < count; i++) {
          this[ids[i]] = arguments[i];
        }
        this.format = () => {
            if (this.type == "code") {
                let temp = this.content;
                temp = temp.split("\n");
                temp = temp.map((e, i) => {return i != 0 ? e.substring(4, e.length) : e});
                this.content = temp.join("\n");
            }
        }
    }
 
    return constructor;
}

let item = createStruct("type content file_name");
let items = [
    new item("title", "OOP"), 
    new item("body", "Sit do labore exercitation fugiat cillum laborum nulla incididunt ut irure dolore culpa in nisi. Cupidatat tempor duis aliqua minim sit ad. Sit do ad cillum nulla officia."),
    new item("body", "Aliqua labore exercitation proident mollit incididunt qui dolore est laborum id velit esse ex. Consectetur officia tempor laborum Lorem. Nisi consequat tempor nostrud eiusmod do laborum eu do ea nisi laborum Lorem incididunt. Laborum veniam sit cillum nostrud magna. Sit pariatur deserunt laboris qui sint qui labore fugiat Lorem minim ut eu ex."),
    new item("code",
    `public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`, "Main.java"),
    new item("code",
    `public class Joe {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`, "Joe.java"),
    new item("code",
    `public class Bob {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`, "Bob.java"),
    new item("body", "Veniam ex enim officia magna adipisicing laboris veniam sit eiusmod. Sint adipisicing ipsum fugiat amet ipsum. Sint veniam qui eu deserunt ea est elit irure ad quis excepteur ex. Deserunt et excepteur ipsum magna minim consequat laboris. Pariatur Lorem ut sit sint pariatur consectetur dolore laborum ex magna magna pariatur."),
    new item("body", "In aliqua nulla velit adipisicing ex in fugiat cupidatat eu aliquip irure mollit proident. Culpa ipsum sunt excepteur incididunt velit quis proident labore et mollit commodo. Sit sit nostrud sit excepteur officia ea sit nulla nisi consequat. Do dolore aute enim sit laborum nostrud reprehenderit velit duis tempor exercitation cupidatat. Aute nostrud do ullamco laborum. Nulla non veniam dolore minim magna dolor cillum id non mollit nisi. Dolore laboris incididunt quis cupidatat minim tempor.")
]


let clipboard_codes = new Array(items.length);

let add_numbers = async () => {
    let code_blocks = document.getElementsByTagName("code");
    for (let i = 0; i < code_blocks.length; i++) {
        let e = code_blocks[i];
        let data = document.createAttribute("data-clipboard");
        let index = document.createAttribute("data-index");
        index.value = i;
        data.value = e.innerText;
        e.classList.add("hljs");
        e.setAttributeNode(index);
        e.setAttributeNode(data);
        let new_text = e.innerText.split("\n").map((line, index) => {return `${index+1}.${line}`});
        let obj = await hljs.highlight("java", new_text.join("\n"));
        e.innerHTML = obj.value;
    }
    
    let numbers = document.getElementsByClassName("hljs-number");

    for (let number of numbers) {
        if (/^\d+\.$/.test(number.innerText)) {
            number.classList.add("number");
            if (number.innerText == "1.") {
                let parent = number.parentNode;
                // https://stackoverflow.com/questions/5882768/how-to-append-a-childnode-to-a-specific-position
                parent.insertBefore(document.createElement("hr"), number);
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
            number.innerText = number.innerText.substring(0, number.innerText.length-1) + "   ";
        }
    }
}

let create_code_block = (parent, content, file_name) => {
    let child_pre = document.createElement("pre");
    let child_code = document.createElement("code");
    let data = document.createAttribute("data-file-name");
    data.value = file_name;
    child_code.classList.add("language-java");
    child_code.innerHTML = content;
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

let parent = document.getElementById("content");
for (let i of items) {
    if (i.type == "code") {
        i.format();
        create_code_block(parent, i.content, i.file_name);
    } else if (i.type == "title") {
        create_title(parent, i.content);
    } else if (i.type == "body") {
        create_body(parent, i.content);
    }
}

let x = document.height;
console.log(x);
add_numbers();
