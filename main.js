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

const titles = ["student", "programmer", "procrastinator"];

/*
  https://www.w3schools.com/jsref/met_win_requestanimationframe.asp
*/

let typing = (n) => {
  document.getElementById("cursor").classList.toggle("cursor-fade");
  const title = titles[n];
  let t = document.getElementById("typing");
  let i = 0;
  let typingAnimation = () => {
    if (i <= title.length) {
      t.innerText = "A " + title.substring(0, i);
      i++;
      setTimeout(() => {
        requestAnimationFrame(typingAnimation);
      }, 100 + Math.random() * 10)
    } else {
      document.getElementById("cursor").classList.toggle("cursor-fade");
    }
  }
  requestAnimationFrame(typingAnimation);
}

let deleting = () => {
  document.getElementById("cursor").classList.toggle("cursor-fade");
  let t = document.getElementById("typing");
  let deletingAnimation = () => {
    let text = t.innerText;
    if (text != "A ") {
      t.innerText = text.substring(0, text.length-1);
      setTimeout(() => {
        requestAnimationFrame(deletingAnimation);
      }, 60 + Math.random() * 10)
    } else if (text == "A ") {
      document.getElementById("cursor").classList.toggle("cursor-fade");
    }
  }
  
  requestAnimationFrame(deletingAnimation);
}

let index = 0;
let typingText = () => {
  let text = document.getElementById("typing").innerText;
  let timeOut = 2000;
  if (text != "A ") {
    deleting();
    index++;
    index %= titles.length;
  } else {
    typing(index);
    timeOut = titles[index].length * 110 + 1500;
  }
  setTimeout(() => {
    requestAnimationFrame(typingText);
  }, timeOut)
}

requestAnimationFrame(typingText);





// Random Old Code

// let typing = (n) => {
//   const title = ["student", "programmer", "procrastinator"][n];
//   let t = document.getElementById("typing");
//   t.innerText = "A ";
//   let i = 0;
//   document.getElementById("cursor").classList.toggle("cursor-fade");
//   let id = setInterval(() => {
//     t.innerText = "A " + title.substring(0, i);
//     if (i >= title.length) {
//       clearInterval(id);
//       document.getElementById("cursor").classList.toggle("cursor-fade");
//     }
//     i++;
//   }, 100)
// }

// let deleting = () => {
//   let t = document.getElementById("typing");
//   document.getElementById("cursor").classList.toggle("cursor-fade");
//   let id = setInterval(() => {
//     let text = t.innerText;
//     console.log(text.length, text);
//     if (text == "A ") {
//       clearInterval(id);
//       document.getElementById("cursor").classList.toggle("cursor-fade");
//     } else {
//       t.innerText = text.substring(0, text.length-1);
//     }
//   }, 95)
// }

// typing(0);
// setInterval(() => {
//   let text = document.getElementById("typing").innerText;
//   if (text != "A ") {
//     deleting();
//     index %= index + 1;
//   } else {
//     typing(index);
//   }
// }, 4000)