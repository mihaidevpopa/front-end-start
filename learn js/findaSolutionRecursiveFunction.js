//this function gets a number and attempts to reach a solution for that number by adding 5 and multiplying by 3
let solution = (target) => {
    let findSolution = (current, history) => {
        if (current == target) { //if the target has been reached, return the history which should contain the calculation used
            return history;
        } else if (current > target) { //if the target has been passed, return null and go again
            return null;
        } else {
            return findSolution(current + 5, `(${history} + 5)`) ||
                findSolution(current * 3, `(${history} * 3)`); //if the target has not been reach and hasn't been passed, then either add or multiply
        }
    }
    return findSolution(1, "1"); //iniciates the findSolution function with the starting value of 1 (for adding or multiplying with)
}

console.log(solution(44));