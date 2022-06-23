console.log('** 110 - Conditional **');



function conditionalCheck(numOne, numTwo){
  if (numOne>numTwo) {
    return "The first number was bigger!"
  }
  else if (numTwo>numOne) {
    return "The second number was bigger!";
  }
  else {
    return "The numbers are the same!";
  }
}
console.log('Example #1:');
console.log('Is 3 bigger than 2? :', conditionalCheck(3,2));

console.log('Example #2:');
console.log('Is 7 bigger than 7? :', conditionalCheck(7,7));

console.log('Example #3:');
console.log('Is 2 bigger than 7? :', conditionalCheck(2,7));
// Assistant was able to create and test a conditional checkpoint function correctly