function processamento() {

    var descricao = document.getElementById ("descricao")
    var legendastexto = document.getElementById("legendastexto")
    var librastexto = document.getElementById("librastexto");
    var imagem = document.getElementById("upload");
    var texto = document.getElementById("texto");
    var caixa = document.getElementById("defaultCheck1");
    var caixa2 = document.getElementById("defaultCheck2");
    var librapro = document.getElementById("librapro");
    var legendapro = document.getElementById("legendapro");

    var processamentotexto = document.getElementById("processamentotexto");
    var btdoacao= document.getElementById("btdoacao");
    // Ocultar os elementos
    legendastexto.style.display = "none";
    librastexto.style.display = "none";
    texto.style.display = "none";
    caixa.style.display = "none";
    caixa2.style.display = "none";
    librapro.style.display = "none";
    legendapro.style.display = "none";
    descricao.style.display = "none";
    // PROCESSAMENTO
    imagem.src="img/loading.gif";

    processamentotexto.textContent= "O seu vídeo está sendo processado, por favor aguarde"
    btdoacao.style.backgroundImage = "url('img/doacao.png')";
    btdoacao.style.display = "block";
}
var upload = document.getElementById("upload");
btupload.addEventListener("click", processamento);
