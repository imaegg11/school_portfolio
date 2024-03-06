
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

// let toggle_lessons = () => {
//     let normalContent = document.getElementById("normal-content");
//     let lessonContent = document.getElementById("lesson-content");
//     normalContent.classList.toggle("fade-right");
//     lessonContent.classList.toggle("fade-left");
// }

let paths = ["nav-home"]

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