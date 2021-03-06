var parar = false;
var arrayEstatisticas = [
  menorRandom(),
  menorRandom(),
  menorRandom(),
  menorRandom(),
  menorRandom(),
  menorRandom(),
  menorRandom(),
  menorRandom(),
  menorRandom(),
  menorRandom(),
  menorRandom(),
  menorRandom(),
];
var percentualAtual = 1.0;
var valorGanhoAtual = 0.0;

//Esta função permite controlar a animação
function controle() {
  if (document.getElementById('entrada').value != '') {
    document.getElementById('botoes').innerHTML =
      '<button type="submit" class="botao" id="botaoRetirar" onclick="stop();">Retirar&nbsp<div class="valorGanho" id="valorGanho"> 0.00</div></button> ';

    var grafico = document.getElementById('grafico');

    //Adiciona a animação
    grafico.classList.add('animate');

    percentualAtual = 1.00;
    var valorSorteado = menorRandom();
    valorGanhoAtual = 0.0;

    //Aumenta a porcentagem um por um
    var currTimeout = setInterval(function () {
      if (percentualAtual >= valorSorteado) {
        //Limpa o intervalo
        clearInterval(currTimeout);
        //Pausa a animação
        grafico.style.animationPlayState = 'paused';
        document.getElementById('valorPercentual').style.textShadow =
          '-2px -2px 5px #b8000c, 2px 2px 5px #b8000c, 0 0 50px #b8000c';
        document.getElementById('crashed').style.visibility = 'visible';

        var tempoDeRecarregar = setInterval(function () {
          clearInterval(tempoDeRecarregar);
          reset();
          atualizarEstatisticas(percentualAtual);
          preencherEstatisticas();
          return false;
        }, 4000);

        var tempoDeProg = setInterval(function () {
          clearInterval(tempoDeProg);
          document.getElementById('planoDeFundoProgresso').style.visibility =
            'visible';
          document.getElementById('progresso').style.display = 'flex';

          var tempoDeProgressoAtual = 6.0;
          var tempoDeProgAtual = setInterval(function () {
            if (tempoDeProgressoAtual <= 0.01) {
              clearInterval(tempoDeProgAtual);
              return false;
            } else {
              tempoDeProgressoAtual = tempoDeProgressoAtual - 0.01;
              document.getElementById('tempoDeProgresso').innerHTML =
                tempoDeProgressoAtual.toFixed(2);
            }
          }, 10);

          return false;
        }, 4150);

        var tempo = setInterval(function () {
          clearInterval(tempo);
          reniciar();
          return false;
        }, 10100);

        return false;
      } else {
        if (parar == false) {
          valorGanhoAtual =
            document.getElementById('entrada').value * percentualAtual;
          document.getElementById('valorGanho').innerHTML =
            valorGanhoAtual.toFixed(2);
          document.getElementById('multiplicador').innerHTML =
            'X' + percentualAtual.toFixed(2);
        } else {
          document.getElementById('planoDeFundoRetirada').style.visibility =
            'visible';
          document.getElementById('valorGanho').innerHTML =
            valorGanhoAtual.toFixed(2);
          document.getElementById('valorGanhoFinal').innerHTML =
            valorGanhoAtual.toFixed(2);
        }

        //Soma porcentagem atual
        percentualAtual = percentualAtual + 0.01;

        //Mostra a nova porcentagem
        document.getElementById('valorPercentual').innerHTML =
          percentualAtual.toFixed(2) + 'X';
      }
    }, 10); //Usando 10 porque faz referência a uma animação de 1 segundo (1000 milissegundos)
  }
}

//Reseta para posição inicial
function reset() {
  var grafico = document.getElementById('grafico');
  grafico.classList.remove('animate');
  document.getElementById('valorPercentual').innerHTML = '1.00X';
  document.getElementById('multiplicador').innerHTML = 'X1.00';
  document.getElementById('valorGanho').innerHTML = '0.00';
  document.getElementById('valorGanhoFinal').innerHTML = '0.00';
  document.getElementById('valorPercentual').style.textShadow =
    '0px 0px 0px #b8000c, 0px 0px 0px #b8000c, 0 0 0px #b8000c';
  document.getElementById('crashed').style.visibility = 'hidden';
  document.getElementById('planoDeFundoRetirada').style.visibility = 'hidden';
  document.getElementById('grafico').style.animationPlayState = 'initial';
  parar = false;
}

function reniciar() {
  document.getElementById('planoDeFundoProgresso').style.visibility = 'hidden';
  document.getElementById('tempoDeProgresso').innerHTML = '6.00';
  document.getElementById('progresso').style.display = 'none';
  document.getElementById('botoes').innerHTML =
    '<button type="submit" class="botao" id="botaoJogar" onclick="controle(), removerBalanco();">Jogar</button>';
  document.getElementById('botaoJogar').disabled = false;
}

//Para no valor que o usuario deseja
function stop() {
  // valorGanhoAtual = document.getElementById('entrada').value * percentualAtual;
  parar = true;
  fetch('http://localhost:3000/adicionarBalanco', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        saldo: Number(valorGanhoAtual.toFixed(2)),
      }),
    });
    pegarBalanco();
  document.getElementById('botoes').innerHTML =
    '<button type="submit" class="botao" id="botaoRetirar" onclick="stop();">Retirar&nbsp<div class="valorGanho" id="valorGanho"> 0.00</div></button> ';
    document.getElementById('botaoRetirar').disabled = true;
}

//Atualiza o array de valores que foram sorteados anteriormente
function atualizarEstatisticas(percentualAtual) {
  var tamanhoVetorEstatisticas = arrayEstatisticas.length;
  for (var i = 0; i < tamanhoVetorEstatisticas - 1; i++) {
    arrayEstatisticas[i] = arrayEstatisticas[i + 1];
  }
  arrayEstatisticas[tamanhoVetorEstatisticas - 1] = percentualAtual;
}

//Preenche as estatiticas, que são os valores sorteados anteriormente
function preencherEstatisticas() {
  for (var i = 0; i < arrayEstatisticas.length; i++) {
    var container = document.getElementById('n' + i);
    if (arrayEstatisticas[i] >= 2) {
      container.innerHTML = arrayEstatisticas[i].toFixed(2);
      container.style.backgroundColor = '#59A96A';
    } else {
      container.innerHTML = arrayEstatisticas[i].toFixed(2);
      container.style.backgroundColor = '#222222';
    }
  }
}

//Retorna o menor valor sorteado 200 vezes entre 0 e 1000
function menorRandom() {
  var arrayRandom = [];
  for (var i = 0; i < 200; i++) {
    arrayRandom[i] = Math.random() * (1000.0 - 1.0) + 1.0;
  }
  return Math.min(...arrayRandom);
}
