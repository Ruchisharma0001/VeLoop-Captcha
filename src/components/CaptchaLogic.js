const Characters = "ABCDEFGHIJKLMNPQRSTUVWXYZ23456789";

export function Random() {
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += Characters[Math.floor(Math.random() * Characters.length)];
    }
    return code;
}

function swapChars(code) {
    const arr = code.split("");
    let i = Math.floor(Math.random() * arr.length);
    let j = Math.floor(Math.random() * arr.length);
    while (j === i) j = Math.floor(Math.random() * arr.length);
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join("");
}

function changeOneChar(code) {
    const arr = code.split("");
    const idx = Math.floor(Math.random() * arr.length);
    let newChar;
    do {
        newChar = Characters[Math.floor(Math.random() * Characters.length)];
    } while (newChar === arr[idx]);
    arr[idx] = newChar;
    return arr.join("");
}

function differentCode(code) {
    const pool = [...Characters].filter((c) => !code.includes(c));
    let result = "";
    for (let i = 0; i < code.length; i++) {
        result += pool[Math.floor(Math.random() * pool.length)];
    }
    return result;
}

export function generateChallenge() {
    const code = Random();

    let opt1 = swapChars(code);
    while (opt1 === code) opt1 = swapChars(code);

    let opt2 = changeOneChar(code);
    while (opt2 === code || opt2 === opt1) opt2 = changeOneChar(code);

    let opt3 = differentCode(code);
    while (opt3 === code || opt3 === opt1 || opt3 === opt2) opt3 = differentCode(code);

    const options = [code, opt1, opt2, opt3].sort(() => Math.random() - 0.5);
    return { code, options };
}