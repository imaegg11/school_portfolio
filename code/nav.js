let goTo = (link) => {
    location.href = link;
}

let toggle_ham = () => {
    let ham_content = document.getElementById("ham-content");
    if (ham_content.classList.contains("opened")) {
        close_ham();
    } else {
        open_ham();
    }
}

let open_ham = () => {
    const children = document.getElementById("ham").children;
    children[0].classList.add("top");
    children[1].classList.add("fade");
    children[2].classList.add("bottom");
    
    let ham_content = document.getElementById("ham-content");
    ham_content.style.right = "0%";
    ham_content.classList.add("opened")

    let darken_div = document.getElementById("darken");
    darken_div.classList.add("darken");
}

let close_ham = () => {
    const children = document.getElementById("ham").children;
    children[0].classList.remove("top");
    children[1].classList.remove("fade");
    children[2].classList.remove("bottom");
    
    let ham_content = document.getElementById("ham-content");
    ham_content.style.right = "-100%";
    ham_content.classList.remove("opened")
    
    let darken_div = document.getElementById("darken");
    darken_div.classList.remove("darken");
    
    reset();
}


let reset = () => {
    for (let i = 1; i < paths.length; i++) {
        let e = document.getElementById(paths[i]);
        e.classList.add("fade-right");
        e.classList.remove("fade-left");
    }
    document.getElementById(paths[0]).classList.remove("fade-left");
    paths = ["nav-home"];
}

let go_forward = (next_id) => {
    next_id = "nav-" + next_id;
    
    let prev = document.getElementById(paths[paths.length - 1]);
    let next = document.getElementById(next_id);
    prev.classList.add("fade-left");
    next.classList.remove("fade-right");
    
    paths.push(next_id);
    
}

let go_back = () => {
    let curr = document.getElementById(paths[paths.length - 1]);
    let next = document.getElementById(paths[paths.length - 2]);
    console.log(curr, next);
    
    curr.classList.add("fade-right");
    next.classList.remove("fade-left")
    
    paths.pop();
}

let create_hamburger = (hamburger_content) => {
    let hamburger_content_parent = document.getElementById("ham-content");
    
    for (let key of Object.keys(hamburger_content)) {
        let sub_pages = hamburger_content[key];
        let child = document.createElement("div");
        
        child.id = key;
        child.classList.add("ham-content-text");
        if (key != "nav-home") {
            child.classList.add("fade-right");
        }
        
        for (let sub_page of sub_pages) {
            let page = document.createElement("p");
            page.classList.add("underline-animation");
            page.innerText = sub_page[0];
            
            if (sub_page.length > 1) {
                page.addEventListener("click", (e) => {
                    sub_page[1](sub_page[2])
                });
            } else if (sub_page[0] == "Back") {
                page.addEventListener("click", (e) => {
                    go_back();
                });
            }
            
            child.appendChild(page);
        }
        
        hamburger_content_parent.appendChild(child);
    }    
}

let paths = ["nav-home"]
const hamburger_content = {
    "nav-home": [["About Me"], ["Projects", goTo, "projects.html"], ["Lessons", go_forward, "lessons"], ["Bibliography"]],
    "nav-lessons": [["OOP Basics", goTo, "OOP_Basic.html"], ["OOP Advanced", goTo, "OOP_Advanced.html"], ["Arrays", goTo, "Arrays.html"], ["Arraylists", goTo, "Arraylists.html"], ["Searching", goTo, "Searching.html"], ["Sorting", goTo, "Sorting.html"], ["Recursion", goTo, "Recursion.html"], ["Back"]]
}

create_hamburger(hamburger_content);

