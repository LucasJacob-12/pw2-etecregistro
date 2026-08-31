//capturando os elementos
const pare = window.document.getElementById("pare");
const atencao = window.document.getElementById("atencao");
const prossiga = window.document.getElementById("prossiga");

const pare1 = window.document.getElementById("pare1");
const atencao1 = window.document.getElementById("atencao1");
const prossiga1 = window.document.getElementById("prossiga1");

//cod1 pare
function parar(){
    pare.style.backgroundColor = 'red'
    atencao.style.backgroundColor = 'gray'
    prossiga.style.backgroundColor = 'gray'
}

//cod2 atenção
function atenc(){
   pare.style.backgroundColor = 'gray'
   atencao.style.backgroundColor = 'yellow'
   prossiga.style.backgroundColor = 'gray'
}

//cod2 prossiga
function prosseguir(){
   pare.style.backgroundColor = 'gray'
   atencao.style.backgroundColor = 'gray'
   prossiga.style.backgroundColor = 'green'
}

pare1.addEventListener('click',parar)
atencao1.addEventListener('click',atenc)
prossiga1.addEventListener('click',prosseguir)
