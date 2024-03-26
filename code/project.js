window.addEventListener("mousemove", (event) => {
    for (let children of document.getElementById("content").children) {
        let pos = children.getBoundingClientRect()
        children.setAttribute("style", `--x: ${event.clientX-pos.x}px; --y: ${event.clientY-pos.y}px`);
    }
});