<?php include('comum/header.html'); ?>

<!-- MUDAR TUDO PRA ORIENTADA A OBJETOS !!!!!!!!!!!!!!!!!!!!! -->

<div class="radio-toolbar">
    <label id="demo" for="radioBranco"></label>
</div>

<form onsubmit="play();return false;" method="post" name="myForm" id="myForm">
    <input type="number" name="name" id="name" required="required"/>
    <input type="submit" name="submit">
</form>

<div class="radio-toolbar">
    <input type="radio" id="radioBranco" name="cor" value="Branco" checked>
    <label for="radioBranco">Branco (10x)</label>

    <input type="radio" id="radioVermelho" name="cor" value="Vermelho">
    <label for="radioVermelho">Vermelho (2x)</label>

    <input type="radio" id="radioPreto" name="cor" value="Preto">
    <label for="radioPreto">Preto (2x)</label> 
</div>

<p id="resultado"></p>

<script>
const valoresRoleta = [0, 5, 1, 6, 8, 3, 4, 9, 7, 2, 10];

function play(){
    var valorApostado = document.getElementById("name").value;
    document.getElementById("name").value = ""; //Limpa o formulario

    const btn = document.querySelector('#btn');        
    const radioButtons = document.querySelectorAll('input[name="cor"]');
 
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }

    let corResultante;
    var resultadoRoleta = Math.floor(Math.random() * (10 - 0) ) + 0; //Sorteio do numero
    
    if(resultadoRoleta == 0){
        document.getElementById('demo').style.backgroundColor = "white";
        document.getElementById('demo').style.color = "black";
        document.getElementById('demo').value = "Branco";
    }
    else if(resultadoRoleta % 2 == 0){
        document.getElementById('demo').style.backgroundColor = "red";
        document.getElementById('demo').style.color = "white";
        document.getElementById('demo').value = "Vermelho";
    }
    else{
        document.getElementById('demo').style.backgroundColor = "black";
        document.getElementById('demo').style.color = "white";
        document.getElementById('demo').value = "Preto";
    }
    corResultante = document.getElementById('demo').value;
    document.getElementById('demo').innerHTML = resultadoRoleta;

    
    if(selectedSize.localeCompare(corResultante) == 0){
        if(corResultante.localeCompare('Branco') == 0){
            resultado.innerText = 'Bingo! Voce apostou R$ '+ valorApostado +',00 e está com o total de R$ '+valorApostado*10+',00.';
        }else{
            resultado.innerText = 'Bingo! Voce apostou R$ '+ valorApostado +',00 e está com o total de R$ '+valorApostado*2+',00.';
        }
    }
    else    
        resultado.innerText = 'Perdeu Tudo.';   

}

</script>

<?php include('comum/footer.html'); ?>