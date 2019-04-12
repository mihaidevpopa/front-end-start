const buildString = (word) => {
    return newWord => word + newWord;
}

const anotherWord = buildString('ola')
console.log(anotherWord(' mundo'));