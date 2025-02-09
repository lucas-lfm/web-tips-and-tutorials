const numeros = [23, 87, 45, 12, 78, 34, 56, 90, 11, 67];

// numeros.forEach(numero => console.log(numero));

// const dobro = numeros.map(numero => numero * 2);

// console.log(dobro);

// const pares = numeros.filter(numero => numero % 2 === 0);

// console.log(pares);

const soma = numeros.reduce((acc, numero) => acc += numero, 0);

console.log(soma);