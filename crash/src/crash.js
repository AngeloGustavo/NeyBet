var parar = false;
var arrayEstatisticas = [menorRandom(), menorRandom(), menorRandom(),
                    menorRandom(), menorRandom(), menorRandom(),
                    menorRandom(), menorRandom(), menorRandom(),
                    menorRandom(), menorRandom(), menorRandom()];


//Esta função permite controlar a animação
function controle(){

  if (document.getElementById("entrada").value != "") {
    document.getElementById("botoes").innerHTML =('<button type="submit" class="botao" id="botaoRetirar" onclick="stop();">Retirar<div class="multiplicador" id="multiplicador"> </div></button> ');

    var grafico = document.getElementById("grafico");

  	//Adiciona a animação
    grafico.classList.add("animate");

    var percentualAtual = 1.00; 
    var valorSorteado = menorRandom();

  	//Aumenta a porcentagem um por um
    var currTimeout = setInterval(function(){

      if(percentualAtual >= valorSorteado){		
        //Limpa o intervalo
        clearInterval(currTimeout);
        //Pausa a animação
        grafico.style.animationPlayState = "paused";
        document.getElementById("valorPercentual").style.textShadow = "-2px -2px 5px #b8000c, 2px 2px 5px #b8000c, 0 0 50px #b8000c";
        document.getElementById("crashed").style.visibility = "visible";

        var tempoDeRecarregar = setInterval(function(){
          clearInterval(tempoDeRecarregar);
          reset();
          atualizarEstatisticas(percentualAtual);   
          preencherEstatisticas();
          return false;
        }, 5000);
        
        return false;
      }
      else{
        if(parar == true){
          document.getElementById("multiplicador").innerHTML = percentualAtual.toFixed(2)+"X";
          parar = false;
        }

        //Soma porcentagem atual
        percentualAtual = percentualAtual + 0.01;
        
        //Mostra a nova porcentagem
        document.getElementById("valorPercentual").innerHTML = percentualAtual.toFixed(2)+"X"; 
      }
    }, 10); //Usando 10 porque faz referência a uma animação de 1 segundo (1000 milissegundos)

  }
}

//Reseta para posição inicial
function reset(){
	var grafico = document.getElementById("grafico");
  grafico.classList.remove("animate");
  document.getElementById("valorPercentual").innerHTML = "1.00X";
  document.getElementById("valorPercentual").style.textShadow = "0px 0px 0px #b8000c, 0px 0px 0px #b8000c, 0 0 0px #b8000c";
  document.getElementById("crashed").style.visibility = "hidden";
  document.getElementById("botoes").innerHTML =('<button type="submit" class="botao" id="botaoJogar" onclick="controle();">Jogar</button>');
  document.getElementById("botaoJogar").disabled = false;
  grafico.style.animationPlayState = "initial";
  grafico.style.webkitAnimationPlayState = "initial"; //if webkit
}

//Para no valor que o usuario deseja
function stop(){  
  parar = true;
  document.getElementById("botoes").innerHTML =('<button type="submit" class="botao" id="botaoRetirar" onclick="stop();">Retirar<div class="multiplicador" id="multiplicador"> </div></button> ');
  document.getElementById("botaoRetirar").disabled = true;
}

//Atualiza o array de valores que foram sorteados anteriormente
function atualizarEstatisticas(percentualAtual){
  var tamanhoVetorEstatisticas = arrayEstatisticas.length;
  for (var i = 0; i < tamanhoVetorEstatisticas - 1; i++) {
    arrayEstatisticas[i] = arrayEstatisticas[i+1];
  }
  arrayEstatisticas[tamanhoVetorEstatisticas-1] = percentualAtual;         
}

//Preenche as estatiticas, que são os valores sorteados anteriormente
function preencherEstatisticas() {
  for (var i = 0; i < arrayEstatisticas.length; i++) {
    if (arrayEstatisticas[i] >= 2) {
      var container = document.getElementById("n" + i);
      container.innerHTML = arrayEstatisticas[i].toFixed(2);
      container.style.backgroundColor = '#59A96A';
    }
    else{
      document.getElementById("n" + i).innerHTML = arrayEstatisticas[i].toFixed(2);
    }
  }
}

//Retorna o menor valor sorteado 200 vezes entre 0 e 1000 
function menorRandom(){
  var arrayRandom = [];
  for (var i = 0; i < 200; i++) {
    arrayRandom[i] = Math.random() * (1000.0 - 1.0) + 1.0;
  }
  return Math.min(...arrayRandom);
}
