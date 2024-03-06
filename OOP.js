
let add_numbers = async () => {
    let code_blocks = document.getElementsByTagName("code");
    for (let i = 0; i < code_blocks.length; i++) {
        let e = code_blocks[i];
        e.classList.add("hljs");
        let new_text = e.innerText.split("\n").map((line, index) => {return `  ${index+1}. ${line}`});
        let obj = await hljs.highlight("java", new_text.join("\n"));
        e.innerHTML = obj.value;
    }
}
// /^\d+\.$/
add_numbers();