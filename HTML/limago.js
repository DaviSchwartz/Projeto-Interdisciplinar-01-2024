function processamento() {
    var descricao = document.getElementById("descricao");
    var legendastexto = document.getElementById("legendastexto");
    var librastexto = document.getElementById("librastexto");
    var imagem = document.getElementById("upload");
    var texto = document.getElementById("texto");
    var caixa = document.getElementById("defaultCheck1");
    var caixa2 = document.getElementById("defaultCheck2");
    var librapro = document.getElementById("librapro");
    var subtexto = document.getElementById("subtexto");
    var processamentotexto = document.getElementById("processamentotexto");
    var btdoacao = document.getElementById("btdoacao");

    // Ocultar os elementos
    legendastexto.style.display = "none";
    librastexto.style.display = "none";
    texto.style.display = "none";
    caixa.style.display = "none";
    caixa2.style.display = "none";
    librapro.style.display = "none";
    descricao.style.display = "none";
    subtexto.style.display = "none";

    // PROCESSAMENTO
    imagem.src = "img/loading.gif";
    imagem.id = "loading";

    processamentotexto.textContent = "O seu vídeo está sendo processado, por favor aguarde";
    btdoacao.textContent = "Faça uma doação";
    btdoacao.style.display = "inline-block";

    // Redirecionar após 4 segundos
    setTimeout(function() {
        window.location.href = "download.html"; // Substitua "download.html" pela URL desejada
    }, 3500); // 4000 milissegundos = 4 segundos
}

var upload = document.getElementById("upload");
btupload.addEventListener("click", processamento);
