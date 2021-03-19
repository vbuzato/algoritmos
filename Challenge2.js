const onErrorMsg = "You can't divide by zero"

const op = {
  addition: (arr) => arr.reduce((acc, curValue) => acc + curValue),
  subtraction: (arr) => arr.reduce((acc, curValue) => acc - curValue),
  division: (a, b) => (b !== 0) ? (a / b) : onErrorMsg,
  multiplication: (arr) => arr.reduce((acc, curValue) => acc * curValue)
}

console.log('Addition:', op.addition([20, 9, 6]));
console.log('Subtraction:', op.subtraction([20, 9, 6]));
console.log('Division:', op.division(2, 0));
console.log('Division:', op.division(10, 30));
console.log('Multiplication:', op.multiplication([20, 9, 6]));