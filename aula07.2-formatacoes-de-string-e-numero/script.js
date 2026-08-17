// letras
// CONTANDO CARACTERES
const nome = window.prompt('Qual é seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras <br>`)

// ALTERANDO PARA MAIUSCULAS
document.write(`Olá, <strong>${nome}</strong>! Seu nome em maiúsculo é ${nome.toUpperCase()} <br>`)

// ALTERANDO PARA minuscula
document.write(`Olá, <strong>${nome}</strong>! Seu nome em maiúsculo é ${nome.toLowerCase()} <br>`)

// numeros
// INSERINDO CASAS DECIMAIS
const salario = Number(window.prompt('Digite seu salário:'))
document.write(`Seu salário com casas decimais é: ${salario.toFixed(2)} <br>`)

// ALTERANDO IDENTIFICADOR DE CASAS DECIMAIS
document.write(`Seu salário com casas decimais é: ${salario.toFixed(2).replace('.',',')} <br>`)

// FORMATAÇÔES DE MOEDA
// real
document.write(`Seu salario em real: ${salario.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} <br>`)
// dolar
document.write(`Seu salario em dolar: ${salario.toLocaleString('pt-br', {style:'currency', currency:'USD'})}<br>`)
// euro
document.write(`Seu salario em euro: ${salario.toLocaleString('pt-br', {style:'currency', currency:'EUR'})}<br>`)