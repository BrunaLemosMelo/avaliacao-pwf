var tamanho = 16

var botaoAumentar = document.getElementById("botaoAumentar")
botaoAumentar.addEventListener("click", aumentarFonte);
function aumentarFonte() {
    tamanho = tamanho + 2
    document.body.style.fontSize = tamanho + "px"
}

var botaoDiminuir = document.getElementById("botaoDiminuir")
botaoDiminuir.addEventListener("click", minimizarFonte);
function minimizarFonte() {
    tamanho = tamanho - 2
    document.body.style.fontSize = tamanho + "px"
}

var coresOriginais = {
    corTexto: document.body.style.color,
    corFundo: document.body.style.backgroundColor
};

// Botão para ativar contraste
var contraste = document.getElementById("contraste");
contraste.addEventListener("click", mudarTextoFundo);

// Botão para resetar cores
var reset = document.getElementById("reset");
reset.addEventListener("click", resetarCores);

function mudarTextoFundo() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function resetarCores() {
    document.body.style.backgroundColor = coresOriginais.corFundo;
    document.body.style.color = coresOriginais.corTexto;
}