function firstAddition(numOne, numTwo) {
    let sum = 0;
    sum = numOne + numTwo;
    return sum;
}

function firstAdditionExamples() {
    console.log('** 100 - ADDITION **');
    console.log('Example #1');
    console.log('The answer should be 5:', firstAddition(2, 3));
    console.log('Example #2');
    console.log('The answer should be 9:', firstAddition(2, 7));
}

console.log(firstAdditionExamples());
// Assistant was able to create and test this function correctly