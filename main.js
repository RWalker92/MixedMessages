function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

messages = {
    sign: ["Star", "Moon", "Sun", "Comet"],
    fortune: ["Good luck", "Bad luck", "Neutral luck", "Great fortune"],
    advice: ["Stay positive", "Be cautious", "Take risks", "Embrace change"],
}

function getFortune() {
    let sign = messages.sign[generateRandomNumber(messages.sign.length)];
    let fortune = messages.fortune[generateRandomNumber(messages.fortune.length)];
    let advice = messages.advice[generateRandomNumber(messages.advice.length)];

    return `Your sign is: ${sign}. Your fortune is: ${fortune}. Advice: ${advice}.`;
}

console.log(getFortune());