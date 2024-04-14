window.addEventListener("mousemove", (event) => {
    for (let child of document.getElementById("content").children) {
        let pos = child.getBoundingClientRect()
        child.setAttribute("style", `--x: ${event.clientX-pos.left}px; --y: ${event.clientY-pos.top}px`);
    }
});

for (let child of document.getElementById("content").children) {
    child.addEventListener("click", (event) => {
        event.target.classList.toggle("big");
    })
}