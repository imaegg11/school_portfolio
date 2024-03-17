document.getElementById("page-container").classList.remove("hide");

const titles = ["student", "programmer", "procrastinator"];

/*
  https://www.w3schools.com/jsref/met_win_requestanimationframe.asp
*/

let typing = (n) => {
    document.getElementById("cursor").classList.toggle("cursor-fade");
    const title = titles[n];
    let t = document.getElementById("typing");
    let i = 0;
    let typing_animation = () => {
        if (i <= title.length) {
            t.innerText = "A " + title.substring(0, i);
            i++;
            setTimeout(() => {
                requestAnimationFrame(typing_animation);
            }, 100 + Math.random() * 10)
        } else {
            document.getElementById("cursor").classList.toggle("cursor-fade");
        }
    }
    requestAnimationFrame(typing_animation);
}

let deleting = () => {
    document.getElementById("cursor").classList.toggle("cursor-fade");
    let t = document.getElementById("typing");
    let deleting_animation = () => {
        let text = t.innerText;
        if (text != "A ") {
            t.innerText = text.substring(0, text.length - 1);
            setTimeout(() => {
                requestAnimationFrame(deleting_animation);
            }, 60 + Math.random() * 10)
        } else if (text == "A ") {
            document.getElementById("cursor").classList.toggle("cursor-fade");
        }
    }

    requestAnimationFrame(deleting_animation);
}

let index = 0;
let typing_text = () => {
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
        requestAnimationFrame(typing_text);
    }, timeOut)
}

requestAnimationFrame(typing_text);





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