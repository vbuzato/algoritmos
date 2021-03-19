// Crie um algoritmo que percorre uma array unidimensional contendo letras e
// números: [ 'a', 10, 'b', 'hola', 122, 15]

console.log("Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ 'a', 10, 'b', 'hola', 122, 15]");
const arr = ['a', 10, 'b', 'hola', 122, 15];

// a. Obtenha uma array contendo apenas as letras
const onlyLetters = arr.filter((item) => /^[A-Za-z]+$/.test(item));

// b. Obtenha uma array contendo apenas os números
const onlyNumbers = arr.filter((item) => /^[0-9]+$/.test(item));

// c. Obtenha o maior número da array acima
const biggestNumber = onlyNumbers.reduce((a, b) => (a > b) ? a : b);

console.log('a. Obtenha uma array contendo apenas as letras:', onlyLetters);
console.log('b. Obtenha uma array contendo apenas os números:', onlyNumbers);
console.log('c. Obtenha o maior número da array acima:', biggestNumber);
