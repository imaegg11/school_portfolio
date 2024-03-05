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
  
    let normalContent = document.getElementById("normal-content");
    let lessonContent = document.getElementById("lesson-content");
    normalContent.classList.remove("hidden2");
    lessonContent.classList.add("hidden1")
}
  
let toggle_lessons = () => {
    let normalContent = document.getElementById("normal-content");
    let lessonContent = document.getElementById("lesson-content");
    normalContent.classList.toggle("hidden2");
    lessonContent.classList.toggle("hidden1");
}


hljs.highlightAll();