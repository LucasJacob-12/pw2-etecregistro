const inputCpu = document.querySelector('input#inputN1')
const inputMemoria = document.querySelector('input#inputN2')
const inputTemperatura = document.querySelector('input#inputN3')

const cpu = document.querySelector('div#cpu')
const memoria = document.querySelector('div#memoria')
const temperatura = document.querySelector('div#temperatura')

const cpu1 = window.document.getElementById("cpu1");
function analiseCpu(){
    const n1 = Number(inputCpu.value);
    if(n1<=60){
        cpu.innerHTML = `CPU:${n1}% - Normal`
        cpu.style.backgroundColor = 'green'
        cpu.style.color = 'white'

    }   
    else if(n1>85){
        cpu.innerHTML = `CPU:${n1}% - Crítico`
        cpu.style.backgroundColor = 'red'
        cpu.style.color = 'white'

    }    
     else{
        cpu.innerHTML = `CPU:${n1}% - Atenção`
        cpu.style.backgroundColor = 'yellow'
        cpu.style.color = 'white'

    }  
}
cpu1.addEventListener('click',parar)  

const memoria1 = window.document.getElementById("memoria1");
function analiseMemoria(){
    const n2 = Number(inputMemoria.value);
    if(n2<=70){
        memoria.innerHTML = `Memoria:${n2}% - Normal`
        memoria.style.backgroundColor = 'green'
        memoria.style.color = 'white'

    }   
    else if(n2>90){
        memoria.innerHTML = `Memoria:${n2}% - Crítico`
        memoria.style.backgroundColor = 'red'
        memoria.style.color = 'white'

    }    
      else {
        memoria.innerHTML = `Memoria:${n2}% - Atenção`
        memoria.style.backgroundColor = 'yellow'
        memoria.style.color = 'white'

    } 
}
memoria1.addEventListener('click',parar)


const temperatura1 = window.document.getElementById("temperatura1");
function analiseTemperatura(){
    const n3 = Number(inputTemperatura.value);
    if(n3<=65){
        temperatura.innerHTML = `Temperatura:${n3}°C - Normal`
        temperatura.style.backgroundColor = 'green'
        temperatura.style.color = 'white'

    }   
    else if(n3>80){
        temperatura.innerHTML = `Temperatura:${n3}°C - Crítico`
        temperatura.style.backgroundColor = 'red'
        temperatura.style.color = 'white'

    }
        else{
        temperatura.innerHTML = `Temperatura:${n3}°C - Atenção`
        temperatura.style.backgroundColor = 'yellow'
        temperatura.style.color = 'white'

    }     
}
temperatura1.addEventListener('click',parar)


function limpar(){
    inputCpu.value = ""
    inputTemperatura.value = ""
    inputMemoria.value = ""
    temperatura.innerHTML = ""
    memoria.innerHTML = ""
    cpu.innerHTML = ""
    temperatura.style.backgroundColor = 'gray'
    cpu.style.backgroundColor = 'gray'
    memoria.style.backgroundColor = 'gray'
}