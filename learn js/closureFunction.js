//a closure function 
function closureFunction(keyWord) {
    let newKeyWord = keyWord;
    return () => newKeyWord;
}

let setKeyWord1 = closureFunction("hey");
let setKeyWord2 = closureFunction("nop");

console.log(setKeyWord1());
console.log(setKeyWord2());

//another closure function

const buildString = (word) => {
    return newWord => newWord + word;
}

const anotherWord = buildString('ola')
console.log(anotherWord('adeus'));