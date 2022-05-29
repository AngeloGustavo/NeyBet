// INICIO NOVA CONFIG
var vetorEx = [];
var vetorNumerosApostados = [];
var tamanhoNumerosAcertados;


function bolasEscolhidas(x) {
    preencheBolasEscolhidas(x);
}

var quantidadeNumSelecionados = 0;
// função que preenche vetor com numeros escolhidos pelo jogador
function preencheBolasEscolhidas(numeroEscolhidoJogador) {
    var contadora = 0, posicaoVetor = vetorEx.length;

    if(vetorEx.length >= 1) {
        for(var i = 0; i < posicaoVetor; i++) {
            if(vetorEx[i] == numeroEscolhidoJogador) { //jogador quer mudar número escolhido
                for(var j = i; j < posicaoVetor; j++) {
                    vetorEx[j] = vetorEx[j+1];
                }
                posicaoVetor--;
                contadora = 1;
                mudaCordeFundo(numeroEscolhidoJogador, 1);
                quantidadeNumSelecionados--;
                QuatidadeNumerosSelecionados(quantidadeNumSelecionados, 2);
            } 
        }
    }

    //preenche com novo numero no vetor
    if(contadora == 0){
        vetorEx[posicaoVetor] = numeroEscolhidoJogador;
        mudaCordeFundo(numeroEscolhidoJogador, 0); //num 0 = muda cor do fundo 
        quantidadeNumSelecionados++;
        QuatidadeNumerosSelecionados(quantidadeNumSelecionados, 1);
    }
    
}

// função que muda as cores de fundo ao clicar em algum número
function mudaCordeFundo(numero, gatilho) {
    switch (numero) {
        case 1: 
            var container = document.getElementById("bola1");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 2: 
            var container = document.getElementById("bola2");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 3: 
            var container = document.getElementById("bola3");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 4: 
            var container = document.getElementById("bola4");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 5: 
            var container = document.getElementById("bola5");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 6: 
            var container = document.getElementById("bola6");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 7: 
            var container = document.getElementById("bola7");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 8: 
            var container = document.getElementById("bola8");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 9: 
            var container = document.getElementById("bola9");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 10: 
            var container = document.getElementById("bola10");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 11: 
            var container = document.getElementById("bola11");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 12: 
            var container = document.getElementById("bola12");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 13: 
            var container = document.getElementById("bola13");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 14: 
            var container = document.getElementById("bola14");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 15: 
            var container = document.getElementById("bola15");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 16: 
            var container = document.getElementById("bola16");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 17: 
            var container = document.getElementById("bola17");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break; 
        case 18: 
            var container = document.getElementById("bola18");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 19: 
            var container = document.getElementById("bola19");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 20: 
            var container = document.getElementById("bola20");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 21: 
            var container = document.getElementById("bola21");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 22: 
            var container = document.getElementById("bola22");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 23: 
            var container = document.getElementById("bola23");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 24: 
            var container = document.getElementById("bola24");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 25: 
            var container = document.getElementById("bola25");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 26: 
            var container = document.getElementById("bola26");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 27: 
            var container = document.getElementById("bola27");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 28: 
            var container = document.getElementById("bola28");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 29: 
            var container = document.getElementById("bola29");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 30: 
            var container = document.getElementById("bola30");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 31: 
            var container = document.getElementById("bola31");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 32: 
            var container = document.getElementById("bola32");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 33: 
            var container = document.getElementById("bola33");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 34: 
            var container = document.getElementById("bola34");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 35: 
            var container = document.getElementById("bola35");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 36: 
            var container = document.getElementById("bola36");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 37: 
            var container = document.getElementById("bola37");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 38: 
            var container = document.getElementById("bola38");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 39: 
            var container = document.getElementById("bola39");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 40: 
            var container = document.getElementById("bola40");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 41: 
            var container = document.getElementById("bola41");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 42: 
            var container = document.getElementById("bola42");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 43: 
            var container = document.getElementById("bola43");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 44: 
            var container = document.getElementById("bola44");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 45: 
            var container = document.getElementById("bola45");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 46: 
            var container = document.getElementById("bola46");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 47: 
            var container = document.getElementById("bola47");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 48: 
            var container = document.getElementById("bola48");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 49: 
            var container = document.getElementById("bola49");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        case 50: 
            var container = document.getElementById("bola50");
            if (gatilho == 0) { container.style.backgroundColor = '#b283eb';
            } else { container.style.backgroundColor = '#d2d2d2';}
            break;
        default:
            text = "Looking forward to the Weekend";
    }
}

// função descobre quantos numeros o jogador escolheu
// minimo = 1 numero e maximo = 12 numeros
function validaNumerosEscolhidos() {
var contadora = 0;

    //procura espaços em brancos ou undefined
    for(var i = 0; i < vetorEx.length; i++) {
        if(vetorEx[i] == "" || vetorEx[i] == undefined) {
            contadora++;
        } else {
            vetorNumerosApostados[i] = vetorEx[i];
        }
    }

    var totalNumerosApostados = vetorEx.length - contadora;
    return totalNumerosApostados;
}

// funcao que mostra a quantidade de numeros que o jogador 
// esta selecionando, direto na interface
function QuatidadeNumerosSelecionados(quantidadeNumSelec, gatilho) {
   
    if(quantidadeNumSelec == 12) {
        alert("Você atingiu o máximo de bolas!"); 
    } 
    tamanhoTela();
    
}

function tamanhoTela() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var screenWidth = screen.width;
    var screenHeight = screen.height;

    document.getElementById("teste").innerHTML = windowWidth + 'x' + windowHeight;

    document.getElementById("teste1").innerHTML = screenWidth + 'x' + screenHeight;
}


// função apos clicar no botao de enviar os dados
// faz a validação dos dados inseridos
var recebeValorApostadoJ = 0;
function validarDados() {
    recebeValorApostadoJ = document.getElementById("valorAposta").value;
    aposta = recebeValorApostadoJ;
    if(recebeValorApostadoJ >= 1 && validaNumerosEscolhidos() >= 1 && validaNumerosEscolhidos() <= 12) {
        alert("Aposta lida com sucesso! \nVocê apostará $:" + recebeValorApostadoJ + "." + "\nSua aposta tem " + validaNumerosEscolhidos() + " números, eles são " + ordenaNumeros(vetorNumerosApostados) + "\nClique em 'OK' para iniciar o jogo");
        setTimeout(preencheBolasSorteadaRodadaUm, 2000);
    } else {
        alert("Número máximo de bolas é 12 e valor minimo de aposta é R$: 1,00.");
    }
}

// funcao que ordena numeros
function ordenaNumeros(vetorNumerosDesordenados_) {

    vetorNumerosDesordenados_.sort(function (a, b) { //números ficam em ordem crescente
	    return (a > b) ? 1 : ((b > a) ? -1 : 0);
    });

    return vetorNumerosDesordenados_;
}




/*======Essa parte corresponde ao inicio do jogo=========*/ 


// função que sorteia numeros
function sorteiaBolas() {
    var listaOrdenada = [];
    var listaNumerosSorteados = [];
    //gera numeros ordenados
    for(var i = 0; i < 50; i++) {
        listaOrdenada[i] = i + 1;
    }
    var tmp, n;
    //embaralha numeros
    for(var p = listaOrdenada.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = listaOrdenada[n];
        listaOrdenada[n] = listaOrdenada[p];
        listaOrdenada[p] = tmp;
    }

    //preenche com os primeiros 20 numeros embaralhados
    for(var l = 0; l < 20; l++) {
        listaNumerosSorteados[l] = listaOrdenada[l];
    }
    return listaNumerosSorteados;
}

// função que chama funções de ordenação e sorteio para
function preencheBolasSorteadaRodadaUm() {
    var listaNumerosSorteados = [];
    listaNumerosSorteados = sorteiaBolas();
    listaNumerosSorteados = ordenaNumeros(listaNumerosSorteados);
    preencheBolasAcertadasRodadaUm(listaNumerosSorteados);
}

// função compara bolas para descobrir acertos do jogador
function comparaBolas(listaNumerosSorteados) {
    var numerosAcertados = [], vetorteste = [];

    var x = 0, y = 0;
    for(var i=0; i<vetorNumerosApostados.length; i++){
        for(var j=0; j<listaNumerosSorteados.length; j++) {
            if(listaNumerosSorteados[j] == vetorNumerosApostados[i]) {
                numerosAcertados[x] = vetorNumerosApostados[i];
                x++;
            } 
        }
    }
   
    tamanhoNumerosAcertados = numerosAcertados.length;

    for(var j=0; j<=12; j++){ // preenche valores vazios com 'x'
        if(numerosAcertados[j] == undefined){
            numerosAcertados[j] = "x";
        } else {
            vetorteste[j] = numerosAcertados[j];
        }
    }
    return numerosAcertados;
}

//função preenche as bolas que foram acertadas
function preencheBolasAcertadasRodadaUm(listaNumerosSorteados) {

    var numerosAcertados = [];
    numerosAcertados = comparaBolas(listaNumerosSorteados);

    for(var i = 0; i < numerosAcertados.length; i++) {
        switch (numerosAcertados[i]) {
            case 1: 
                var container = document.getElementById("bola1");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 2: 
                var container = document.getElementById("bola2");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 3: 
                var container = document.getElementById("bola3");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 4: 
                var container = document.getElementById("bola4");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 5: 
                var container = document.getElementById("bola5");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 6: 
                var container = document.getElementById("bola6");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 7: 
                var container = document.getElementById("bola7");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 8: 
                var container = document.getElementById("bola8");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 9: 
                var container = document.getElementById("bola9");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 10: 
                var container = document.getElementById("bola10");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 11: 
                var container = document.getElementById("bola11");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 12: 
                var container = document.getElementById("bola12");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 13: 
                var container = document.getElementById("bola13");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 14: 
                var container = document.getElementById("bola14");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 15: 
                var container = document.getElementById("bola15");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 16: 
                var container = document.getElementById("bola16");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 17: 
                var container = document.getElementById("bola17");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break; 
            case 18: 
                var container = document.getElementById("bola18");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 19: 
                var container = document.getElementById("bola19");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 20: 
                var container = document.getElementById("bola20");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 21: 
                var container = document.getElementById("bola21");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 22: 
                var container = document.getElementById("bola22");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 23: 
                var container = document.getElementById("bola23");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 24: 
                var container = document.getElementById("bola24");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 25: 
                var container = document.getElementById("bola25");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 26: 
                var container = document.getElementById("bola26");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 27: 
                var container = document.getElementById("bola27");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 28: 
                var container = document.getElementById("bola28");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 29: 
                var container = document.getElementById("bola29");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 30: 
                var container = document.getElementById("bola30");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 31: 
                var container = document.getElementById("bola31");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 32: 
                var container = document.getElementById("bola32");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 33: 
                var container = document.getElementById("bola33");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 34: 
                var container = document.getElementById("bola34");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 35: 
                var container = document.getElementById("bola35");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 36: 
                var container = document.getElementById("bola36");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 37: 
                var container = document.getElementById("bola37");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 38: 
                var container = document.getElementById("bola38");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 39: 
                var container = document.getElementById("bola39");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 40: 
                var container = document.getElementById("bola40");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 41: 
                var container = document.getElementById("bola41");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 42: 
                var container = document.getElementById("bola42");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 43: 
                var container = document.getElementById("bola43");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 44: 
                var container = document.getElementById("bola44");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 45: 
                var container = document.getElementById("bola45");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 46: 
                var container = document.getElementById("bola46");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 47: 
                var container = document.getElementById("bola47");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 48: 
                var container = document.getElementById("bola48");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 49: 
                var container = document.getElementById("bola49");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            case 50: 
                var container = document.getElementById("bola50");
                container.style.backgroundColor = '#109715';
                container.style.borderColor = '#083c16';
                container.style.boxShadow = '2px 2px 2px #083c16';
                break;
            default:
                text = "Erro!! cor de fundo números sorteados.";
        }
    }

    preencheBolasSort(listaNumerosSorteados, numerosAcertados);

    calculaValorRodada();
    preencheInterface();
}

//função seleciona as bolas sorteadas - acertadas, gerando a diferença
function preencheBolasSort(numSort, numAc) {
    
    var vetorDiferenca = [];
    vetorDiferenca = numSort.filter(function(item) {
        return !~$.inArray(item, numAc);
    });
    
    for(var i = 0; i < vetorDiferenca.length; i++) {
        switch (vetorDiferenca[i]) {
            case 1: 
                var container = document.getElementById("bola1");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 2: 
                var container = document.getElementById("bola2");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 3: 
                var container = document.getElementById("bola3");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 4: 
                var container = document.getElementById("bola4");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 5: 
                var container = document.getElementById("bola5");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 6: 
                var container = document.getElementById("bola6");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 7: 
                var container = document.getElementById("bola7");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 8: 
                var container = document.getElementById("bola8");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 9: 
                var container = document.getElementById("bola9");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 10: 
                var container = document.getElementById("bola10");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 11: 
                var container = document.getElementById("bola11");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 12: 
                var container = document.getElementById("bola12");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 13: 
                var container = document.getElementById("bola13");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 14: 
                var container = document.getElementById("bola14");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 15: 
                var container = document.getElementById("bola15");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 16: 
                var container = document.getElementById("bola16");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 17: 
                var container = document.getElementById("bola17");
                container.style.backgroundColor = '#f3be6f';
                break; 
            case 18: 
                var container = document.getElementById("bola18");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 19: 
                var container = document.getElementById("bola19");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 20: 
                var container = document.getElementById("bola20");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 21: 
                var container = document.getElementById("bola21");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 22: 
                var container = document.getElementById("bola22");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 23: 
                var container = document.getElementById("bola23");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 24: 
                var container = document.getElementById("bola24");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 25: 
                var container = document.getElementById("bola25");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 26: 
                var container = document.getElementById("bola26");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 27: 
                var container = document.getElementById("bola27");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 28: 
                var container = document.getElementById("bola28");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 29: 
                var container = document.getElementById("bola29");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 30: 
                var container = document.getElementById("bola30");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 31: 
                var container = document.getElementById("bola31");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 32: 
                var container = document.getElementById("bola32");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 33: 
                var container = document.getElementById("bola33");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 34: 
                var container = document.getElementById("bola34");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 35: 
                var container = document.getElementById("bola35");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 36: 
                var container = document.getElementById("bola36");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 37: 
                var container = document.getElementById("bola37");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 38: 
                var container = document.getElementById("bola38");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 39: 
                var container = document.getElementById("bola39");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 40: 
                var container = document.getElementById("bola40");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 41: 
                var container = document.getElementById("bola41");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 42: 
                var container = document.getElementById("bola42");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 43: 
                var container = document.getElementById("bola43");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 44: 
                var container = document.getElementById("bola44");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 45: 
                var container = document.getElementById("bola45");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 46: 
                var container = document.getElementById("bola46");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 47: 
                var container = document.getElementById("bola47");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 48: 
                var container = document.getElementById("bola48");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 49: 
                var container = document.getElementById("bola49");
                container.style.backgroundColor = '#f3be6f';
                break;
            case 50: 
                var container = document.getElementById("bola50");
                container.style.backgroundColor = '#f3be6f';
                break;
            default:
                text = "Erro!! cor de fundo números sorteados.";
        }
    }

}



/* parte referencia ao calculo e resultado do jogo*/



// linha matriz = qtd numeros jogados
// coluna matriz = qtd numeros sorteados que foram sorteados
function matrizPontos() {
    var y = validaNumerosEscolhidos();
    y = y - 1;

    var matriz = [  [0, 3],
                [0, 1, 9],
                [0, 1, 2, 16],
                [0, 0.5, 2, 6, 12],
                [0, 0.5, 1, 3, 15, 50],
                [0, 0.5, 1, 2, 3, 30, 75],
                [0, 0.5, 0.5, 1, 6, 12, 36, 100],
                [0, 0.5, 0.5, 1, 3, 6, 19, 90, 720],
                [0, 0.5, 0.5, 1, 2, 4, 8,  20, 80, 1.200],
                [0, 0, 0.5, 1, 2, 3, 5, 10, 30, 600, 1800],
                [0, 0, 0.5, 1, 1, 2, 6, 15, 25, 180, 1000, 3000],
                [0, 0, 0, 0.5, 1, 2, 4, 24, 72, 250, 500, 2000, 4000],
                [0, 0, 0, 0.5, 0.5, 3, 4, 5, 20, 80, 240, 500, 3000, 6000] ];

    var valorMatriz = matriz[y][tamanhoNumerosAcertados];
    
    return valorMatriz;
}

// funcao calcula o valor que ganhou ou perdeu na rodada
function calculaValorRodada() {
    var recebeValorApostado = document.getElementById("valorAposta").value;
    
    var x = matrizPontos();
    
    var valorResultado = x * recebeValorApostado;
    
    calculaValorTotal(valorResultado);

    return valorResultado;
}

//calcula quanto a pessoa ganhou/perdeu no final do jogo
function calculaValorTotal(valor) {
    var xy = document.getElementById("valorAposta").value;
    var valorGanhoTotal = 0;

    if(valor == 0) {
        valorGanhoTotal = 0;
    } else {
        valorGanhoTotal = (xy * 1) + valor;
    }

    return valorGanhoTotal;
}

//preenche o valor total ganho
function preencheInterface() {
    
    var w = calculaValorTotal(calculaValorRodada());
    if(w == 0) {
        document.getElementById("RecebeuFinal").innerHTML = calculaValorTotal(calculaValorRodada());
        document.getElementById("RecebeuFinal").style.color= "red";
    } else {
        document.getElementById("RecebeuFinal").innerHTML = calculaValorTotal(calculaValorRodada());
        document.getElementById("RecebeuFinal").style.color= "green";
    }
    
}

