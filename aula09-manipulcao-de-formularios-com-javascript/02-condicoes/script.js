const inputVelocidade = document.querySelector('input#inputVelocidade')
const resultado = document.querySelector('div#resultado')
const limite = 80

function verificarVelocidade(){
    const velocidade = inputVelocidade.value;
            resultado.innerHTML = `Sua velocidade atual é d e${velocidade}Km/h. O limite da via é de ${limite}Km/h`
    if(velocidade>limite){
        resultado.innerHTML += `<p>Você esta <strong>multado</strong> por excesso de velocidade</p>`
    }
    else{
        resultado.innerHTML += `<p>Você esta dentro do limite de velocidade! Dirija com cuidado!</p>`
    }
}