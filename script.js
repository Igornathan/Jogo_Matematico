var urlAtual = window.location.href;    //pegando o parametro da dificuldade pela URL

var urlClass = new URL(urlAtual);

var dificuldade = urlClass.searchParams.get("dificuldade");

function randomNumber(a, b) {           //criando função pra gerar um número aleatório
    return Math.floor(Math.random() * (b - a + 1)) + a
}

if (dificuldade == "facil") {
    var n1 = (randomNumber(1, 10))
    var n2 = (randomNumber(1, 10))
    var calculo = n1 + n2
} else if (dificuldade == "normal") {
    var n1 = (randomNumber(10, 100))
    var n2 = (randomNumber(10, 100))
    var calculo = n1 + n2
} else {
    var n1 = (randomNumber(100, 1000))
    var n2 = (randomNumber(100, 1000))
    var calculo = n1 + n2
}

document.getElementById("pergunta").innerHTML = `Quanto é ${n1} + ${n2}?`


function Enviar(event) {                //criando função para fazer a verificação se o valor esta correto e retornar se está errado ou não
    event.preventDefault();             //faz com que a pagina não se atualize após o envio do formulário 
    var result = document.getElementById("result").value

    if (result == calculo) {
        document.getElementById("aviso").innerHTML = `Parabéns! Você acertou!`
    }
    else {
        document.getElementById("aviso").innerHTML = `Você errou. O valor é ${calculo}`
    }
}