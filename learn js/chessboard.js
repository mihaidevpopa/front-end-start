//create a chessboard with a dynamic size
let row = '';
const size = 12;
for (verticalCount = 0; verticalCount < size; verticalCount++) {
    for (let horizontalCount = 0; horizontalCount < size; horizontalCount++) {
        if ((horizontalCount + verticalCount) % 2 == 0) {
            row += ' ';
        } else {
            row += '#';
        }
    }
    row += '\n';
}
console.log(row);