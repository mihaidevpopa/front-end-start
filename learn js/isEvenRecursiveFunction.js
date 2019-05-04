//this is a recursive function that receives a number and outputs TRUE if it's even or FALSE if it's odd
let isEven = (number) => {
    if (number == 0) {
        return true;
    } else if (number == 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number) //if the number is a negative value, it turns it into a positive ("-" + "-" = +)
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(-2));