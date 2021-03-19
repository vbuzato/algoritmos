// Crie um algoritmo que gere o seguinte padrão de ID aleatório:
// XXXX-AAAA-BBBB-CCCC
// // a. Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
// // b. O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
// // c. O resultado deve ser armazenado em uma variável. Por exemplo:
// // // i. let id = generarId()
// // // ii. id vale ~ abc1-bb12-234a-bcc2

const generarId = () => {
  const blockId = () => Math.random().toString(36).slice(2, 6);
  return `${blockId()}-${blockId()}-${blockId()}-${blockId()}`
}

const id = generarId()

console.log(id);
