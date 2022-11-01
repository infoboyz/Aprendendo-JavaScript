//Declaracao de referencias
const listadeTeclas = document.querySelectorAll('.tecla');
let x = 0;

//Funcoes
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

//Estrutura de repeticao para por o som nas teclas
while (x < listadeTeclas.length) {
    listadeTeclas[x].onclick = tocaSomPom
    x = x + 1;
    console.log(x);
}
