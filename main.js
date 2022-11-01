//Declaracao de referencias
const listadeTeclas = document.querySelectorAll('.tecla');
let x = 0;

//Funcoes
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//Estrutura de repeticao para por o som nas teclas
while (x < listadeTeclas.length) {

    //Declaracao de referencias dentro do while
    const tecla = listadeTeclas[x]
    const classe = tecla.classList[1];
    const idAudio = `#som_${classe}`

    //Inserindo o som na tecla
    tecla.onclick = function () {
        tocaSom(idAudio)
    
    }

    //Continuando a estrutura de repeticao
    x = x + 1;
}
