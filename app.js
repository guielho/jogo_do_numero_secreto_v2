let listaNumerosSorteados = [];
let = numeroLimite = 112;
let numeroSecreto = gerarNumeroAleatorio ();
let numeroTentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial ();

function verificarChute () {
    let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = (`Você descrobriu o número secreto com ${numeroTentativas} ${palavraTentativa}!`);
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById ('reiniciar').removeAttribute ('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor.');
        } else {exibirTextoNaTela ('p', 'O número secreto é maior.');    
        }
        numeroTentativas++;
        limparCampo ();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random () * numeroLimite + 1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes (numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    }   else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log (listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo () {
        numeroSecreto = gerarNumeroAleatorio ();
        limparCampo ();
        numeroTentativas = 1;
        exibirMensagemInicial ();
        document.getElementById ('reiniciar').setAttribute ('disabled', true);
}