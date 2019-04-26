//recursive function. A recursive function is a function that calls itself until it doesn't
let countdown = (number) => {
    if (number == 0) return; //if
    console.log(number); //else
    countdown(number - 1);
}

countdown(5);