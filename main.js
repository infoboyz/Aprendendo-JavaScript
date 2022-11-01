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
    const idAudio = `#som_${classe}`

    //Inserindo o som na tecla
    tecla.onclick = function () {
        tocaSom(idAudio)
    
    }
}
