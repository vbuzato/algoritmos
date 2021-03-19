// Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções
// elementares de adição, subtração, multiplicação e divisão.
// // a. Leve em consideração que a divisão não deve permitir dividendo 0
// // b. A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
// // c. A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
// // d. Função de multiplicação - Idem
// // e. A função de divisão aceita dois parâmetros: a e b.

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