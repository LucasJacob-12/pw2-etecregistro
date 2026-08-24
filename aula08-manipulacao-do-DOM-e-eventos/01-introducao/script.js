// Capturando um elemento DOm
const titulo = window.document.getElementsByTagName('h1')[0]
// Alterando oq esta escrito atraves de JS
titulo.innerText = "Fui alterado pelo JS :("
// Trocando a cor do txt como no css
titulo.style.color='yellow'

// Alterando a cor da pag com JS
const pag = window.document.body
pag.style.backgroundColor='#2f2f2f'

// capturando a div
const caixaMagica = window.document.getElementById("caixaMagica");

//Criando uma função
function entrada(){
    caixaMagica.innerText ='Oi :)'
    caixaMagica.style.backgroundColor = 'blue'
}
function saida(){
    caixaMagica.innerText='Tchau :)'
    caixaMagica.style.backgroundColor='black'
}
function clicar(){
    caixaMagica.innerText='Clicou!'
    caixaMagica.style.backgroundColor = 'red'
}



//Escutando um evento
//quando o mouse entrar dentro das caixa magica os eventos da function acontecem
caixaMagica.addEventListener('mouseenter',entrada)
caixaMagica.addEventListener('mouseout',saida)
caixaMagica.addEventListener('click',clicar)
