var options = [0, 5, 1, 6, 8, 3, 4, 9, 7, 2, 10];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

document.getElementById("spin").addEventListener("click", spin);

function getColor(posicao) {
    if(posicao == 0){
      return '#FFF';
    }else if(posicao%2 == 0){
      return '#000';
    }
    return '#B8000C';
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var textRadius = 160;
    var insideRadius = 125;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.font = 'bold 20px Helvetica, Arial';


    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      ctx.fillStyle = getColor(i);

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.fillStyle = "white";
      if(i==0)
        ctx.fillStyle = "black";

      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    } 

    //Arrow
    ctx.fillStyle = "#999";
    ctx.beginPath();
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.fill();
  }
}

function spin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function rotateWheel() {
  if(document.getElementById("entrada").value != ""){
    spinTime += 30;
    if(spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawRouletteWheel();
    spinTimeout = setTimeout('rotateWheel()', 30);
  }
}

function stopRotateWheel() {
  var valorApostado = document.getElementById("entrada").value;
  document.getElementById("entrada").value = ""; //Limpa o formulario

  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 20px Helvetica, Arial';
  

  const btn = document.querySelector('#btn');        
  const radioButtons = document.querySelectorAll('input[name="cor"]');

  let corSelecionada;
  for (const radioButton of radioButtons) {
      if (radioButton.checked) {
          corSelecionada = radioButton.value;
          break;
      }
  }
  var numeroSorteado = options[index];
  var text;
  var valorGanhoAtual = 0.0;
  if(numeroSorteado == 0 && corSelecionada == 'Branco'){
    valorGanhoAtual = 10*valorApostado;
    text = 'Voce apostou '+valorApostado+' e ganhou '+valorGanhoAtual; //Resultado da aposta
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
  }else if
    ((index %2 != 0 && corSelecionada == 'Vermelho') ||
    (index %2 == 0 && corSelecionada == 'Preto')){
      valorGanhoAtual = 2*valorApostado;
      text = 'Voce apostou '+valorApostado+' e ganhou '+valorGanhoAtual; //Resultado da aposta
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
  }else{
    text = 'Voce perdeu tudo'; //Resultado da aposta
  }
    
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();