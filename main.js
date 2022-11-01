//Declaracao de referencias
const listadeTeclas = document.querySelectorAll('.tecla');
let x = 0;

//Funcoes
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//Estrutura de repeticao para por o som nas teclas
while (x < listadeTeclas.length) {
    listadeTeclas[x].onclick = function () {
        tocaSom('#som_tecla_pom')
    }
    x = x + 1;
    console.log(x);
}
