//Desafio 1
document.querySelector('input[type=tel]')

//Desafio 2
const listadeTeclas = document.querySelectorAll('input[type=button]')
console.log(listadeTeclas);

//Desafio 3 
const campo = document.querySelector('input[type=tel]')

for (x = 0; x < listadeTeclas.length; x++){
    const tecla = listadeTeclas[x];

    tecla.onclick = function () {
        campo.value += tecla.value;
    }
    
    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}