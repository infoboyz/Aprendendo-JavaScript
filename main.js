//Declaracao de referencias
const listadeTeclas = document.querySelectorAll('.tecla');

//Funcoes
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//Estrutura de repeticao para por o som nas teclas
for (let x = 0; x < listadeTeclas.length ; x++) {

    //Declaracao de referencias dentro do while
    const tecla = listadeTeclas[x]
    const classe = tecla.classList[1];
    //Template string
    const idAudio = `#som_${classe}`; 

    //Inserindo o som na tecla
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
        tecla.classList.remove('ativa');
    }
}
