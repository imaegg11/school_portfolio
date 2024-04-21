let keywords = ["System", "abstract", "continue", "for", "new", "switch", "assert", "default", "goto", "package", "synchronized", "boolean", "do", "if", "private", "this", "break", "double", "implements", "protected", "throw", "byte", "else", "import", "public", "throws", "case", "enum", "instanceof", "return", "transient", "catch", "extends", "int", "short", "try", "char", "final", "interface", "static", "void", "class", "finally", "long", "strictfp", "volatile", "const", "float", "native", "super", "while"];
let global_data_types = ["byte", "short", "int", "long", "float", "double", "boolean", "char", "String", "ArrayList", "Integer", "Boolean", "Double", "Character", "Byte", "Short", "Long", "Float"];

let find_data_types = (text) => {
    let extended_classes = ([...text.matchAll(/extends\s+[a-zA-Z0-9]+/gm)]).map((e) => e[0].split(/ +/)[1]);
    let created_classes = ([...text.matchAll(/class\s+[a-zA-Z0-9]+/gm)]).map((e) => e[0].split(/ +/)[1]);
    let variable_data_types = ([...text.matchAll(/[a-zA-Z0-9]+[ ]+[a-zA-Z0-9]+[ ]+=[^=]/gm)]).map((e) => e[0].split(/[ ]+/)[0]);
    let implemented_interfaces = [...text.matchAll(/implements[ ]+([a-zA-Z0-9]+[ ]*,?[ ]*)*/gm)].length != 0 ? ([...text.matchAll(/implements[ ]+([a-zA-Z0-9]+[ ]*,?[ ]*)*/gm)])[0][0].split(/[ /,]+/).slice(1) : [];
    let created_interfaces = ([...text.matchAll(/interface\s+[a-zA-Z0-9]+/gm)]).map((e) => e[0].split(/ +/)[1]);
    return extended_classes.concat(created_classes, variable_data_types, implemented_interfaces, created_interfaces);
}

let parseToken = (token, isFunction, data_types, isVariable) => {
    if (keywords.includes(token)) {
        return "<span class='keyword'>" + token + "</span>";
    } else if (token.substring(0, 2) == "//") {
        return "<span class='comment'>" + token + "</span>";
    } else if (!isNaN(token) && token != "") {
        return "<span class='syntax-number'>" + token + "</span>";
    } else if (Array.from("\"'").includes(token[0]) && token[0] == token[token.length - 1]) {
        return "<span class='string'>" + token + "</span>";
    } else if (data_types.includes(token)) {
        return "<span class='dataType'>" + token + "</span>";
    } else if (isFunction) {
        return "<span class='function'>" + token + "</span>";
    } else if (isVariable) {
        return "<span class='variable'>" + token + "</span>";
    } else {
        return token;
    }
}

let parseText = (text) => {
    let seperators = Array.from(";()[]{}<>,:=!*&%.\n+-/^|?~ ");
    let currentToken = "";
    let highlightedText = "";
    let dataTypes = find_data_types(text).concat(global_data_types);
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (seperators.includes(char)) {
            let tokenLength = currentToken.length;
            if ((currentToken.substring(0, 2) == "//" && char != "\n") || (char == "/" && currentToken == "" && (i+1 < text.length) && text[i+1] == "/") || (char == "/" && currentToken == "/")) {
                currentToken += char;
            } else if (Array.from("\"'").includes(currentToken[0]) && (currentToken[tokenLength - 1] != currentToken[0] || currentToken[tokenLength - 2] == "\\")) {
                currentToken += char;
            } else if (char == "." && !isNaN(currentToken)) {
                currentToken += char;
            } else if (char == " ") {
                let capture = "";
                while (text[i] == " ") {
                    i++;
                    capture += text[i];
                }
                if (capture[capture.length - 1] == "(") {
                    highlightedText += parseToken(currentToken, true, dataTypes) + char + capture;
                    currentToken = "";
                } else {
                    i -= capture.length;
                    // GG I made an accidental variable detector lmfao that only detects 
                    // it if its being declared, or being called but not when there's a method
                    // being called??? I have no idea how this works (I think it's something
                    // to do with highlighting everyhting else and not actually a variable
                    // detector)
                    highlightedText += parseToken(currentToken, false, dataTypes) + char;
                    currentToken = "";
                }
            } else if (char == "(") {
                highlightedText += parseToken(currentToken, true, dataTypes) + char;
                currentToken = "";
            } else {
                highlightedText += parseToken(currentToken, false, dataTypes) + char;
                currentToken = "";
            }
        } else {
            currentToken += char;
        }
    }
    return highlightedText;
}
