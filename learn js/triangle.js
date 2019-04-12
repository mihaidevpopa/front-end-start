//Simple triangle
for (let triangle = ''; triangle.length <= 7; triangle += '#') {
    console.log(triangle);
}


// Simple triangle using "while" loop
let triangle = '0';
while (triangle.length <= 7) {
    console.log(triangle);
    triangle += '0';
}

//triangle that is made up from words
const word = 'te tchoras';
let letterCount = 0;
let triangle = '';
while (letterCount <= word.length) {
    console.log(triangle);
    triangle += word.charAt(letterCount);
    letterCount++;
}