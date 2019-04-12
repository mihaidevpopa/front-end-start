//print numbers from 1 to 100. When a number is divisible by 3 print Fizz, when it's divisible by 5 print Buzz+
//+when it's divisible by both 3 and 5 print FizzBuzz
for (let count = 1; count <= 100; count++) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log('FizzBuzz');
    } else if (count % 3 == 0) {
        console.log('Fizz');
    } else if (count % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(count);
    }
}