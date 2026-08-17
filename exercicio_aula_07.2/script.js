const nome=window.prompt('Digite seu nome:')
const atual=Number(window.prompt('Digite o ano atual:'))
const nasc=Number(window.prompt('Digite o ano do seu nascimento:'))
const cidade=window.prompt('Digite sua cidade:')
const salario=Number(window.prompt('Digite o seu salário:'))
const idade=atual-nasc
const dolar=salario*0.19
const euro=salario*0.17

document.write(`<h2>Seja bem-vindo ${nome.toUpperCase()}!</h2><br>`)
document.write(`Você tem ${idade} anos de idade!<br>`)
document.write(`Você mora em ${cidade.toUpperCase()}!<br>`)
document.write(`O nome de sua sua cidade possui ${cidade.length} caracteres<br>`)
// real
document.write(`Seu salario em real: ${salario.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} <br>`)
// dolar
document.write(`Seu salario em dolar: ${dolar.toLocaleString('pt-br', {style:'currency', currency:'USD'})}<br>`)
// euro
document.write(`Seu salario em euro: ${euro.toLocaleString('pt-br', {style:'currency', currency:'EUR'})}<br>`)
