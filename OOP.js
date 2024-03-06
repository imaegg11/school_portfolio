
let add_numbers = async () => {
    let code_blocks = document.getElementsByTagName("code");
    for (let i = 0; i < code_blocks.length; i++) {
        let e = code_blocks[i];
        e.classList.add("hljs");
        let new_text = e.innerText.split("\n").map((line, index) => {return `${index+1}.   ${line}`});
        let obj = await hljs.highlight("java", new_text.join("\n"));
        e.innerHTML = obj.value;
    }
    let numbers = document.getElementsByClassName("hljs-number");
    for (let number of numbers) {
        if (/^\d+\.$/.test(number.innerText)) {
            number.classList.add("number");
        }
    }
}
// /^\d+\.$/
add_numbers();