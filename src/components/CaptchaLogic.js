const Characters = "ABCDEFGHIJKLMNPQRSTUVWXYZ23456789";

export function Random() {
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += Characters[Math.floor(Math.random() * Characters.length)];
    }
    return code;
}

export function SimilarOption(code) {
    const arr = code.split("");
    let i = Math.floor(Math.random() * arr.length);
    let j = Math.floor(Math.random() * arr.length);
    while (j === i) j = Math.floor(Math.random() * arr.length);
    [arr[i], arr[j]] = [arr[j], arr[i]];

    const idx = Math.floor(Math.random() * arr.length);
    let newChar;
    do {
        newChar = Characters[Math.floor(Math.random() * Characters.length)];
    } while (newChar === arr[idx]);
    arr[idx] = newChar;

    return arr.join("");
}

export function generateChallenge() {
    const code = Random();
    let opt1 = SimilarOption(code);
    let opt2 = SimilarOption(code);
    while (opt2 === opt1 || opt2 === code) opt2 = SimilarOption(code);
    let opt3 = Random();
    while (opt3 === code || opt3 === opt1 || opt3 === opt2) opt3 = Random();
    const options = [code, opt1, opt2, opt3].sort(() => Math.random() - 0.5);
    return { code, options };
}
