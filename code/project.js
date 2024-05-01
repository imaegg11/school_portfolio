window.addEventListener("mousemove", (event) => {
    for (let child of document.getElementById("content").children) {
        let pos = child.getBoundingClientRect()
        child.setAttribute("style", `--x: ${event.clientX-pos.left}px; --y: ${event.clientY-pos.top}px`);
    }
});

for (let child of document.getElementById("content").children) {
    child.addEventListener("click", (event) => {
        let e = event.target;
        let title = e.children[1].children[0].innerText;
        let project_info;
        for (let i of projects) {
            if (i.name == title) {
                project_info = i;
                break;
            }
        }
        
        let modal = document.querySelector("dialog");
        modal.showModal();
        modal.blur();

        let children = modal.children;
        children[1].innerText = title;
        let grandchildren = children[2].children;
        grandchildren[0].src = project_info.img;
        grandchildren[1].children[0].innerText = project_info.about;
        let made_with = grandchildren[1].children[2];
        made_with.inenrHTML = "";
        made_with.replaceChildren();
        for (let tech of project_info.tech) {
            let e = document.createElement("li");
            e.innerText = tech;
            made_with.appendChild(e);
        } 

        grandchildren[1].children[3].href = project_info.download;
        console.log(grandchildren[1].children[3])
        // document.body.style.overflow = "hidden";
    })
}

document.querySelector("dialog").addEventListener("close", (event) => {
    // document.body.style.overflow = "auto";
})

let add_content = () => {
    let content_cont = document.getElementById("content");
    for (let i = 0; i < content_cont.children.length; i++) {
        let child = content_cont.children[i];
        let content = projects[i];
        let grandchildren = child.children;
        grandchildren[1].children[0].innerText = content.name;
        grandchildren[1].children[1].innerText = content.about;
        grandchildren[0].src = content.img;
    }
}

add_content();