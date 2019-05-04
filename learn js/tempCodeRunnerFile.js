let countBs = (word) => {
    return countChars(word, 'B');
}


let countChars = (word, char) => {
    let numberOfChars = 0;
    for (let i = 0; i <= word.length - 1; i++) {
        if (word[i] == char) {
            numberOfChars += 1;
        }
    }
    return numberOfChars;
}

console.log(countBs('BaBaB'));
console.log(countChars('amar', 'a'));