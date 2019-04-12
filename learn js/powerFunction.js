//function that calculates the power of a number (base and exponent)
const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count <= exponent; count++) {
        result *= base;
    }
    console.log(result);
}
power(9, 3);

//arrow function
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count <= exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(9, 3));