
function imc(){

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value.replace(",", ".");
    let classificacao = "";
   
    let imc = peso / (altura * altura);
    
    imc = imc.toFixed(1);

    if(imc < 18.5){
        classificacao = "Abaixo do Peso";
    }
    else if(imc >= 18.5 && imc <= 24.9){
        classificacao = "Peso Normal";
    }
    else if(imc >= 25 && imc <= 29.9){
        classificacao = "Sobrepeso";
    }
    else if(imc >= 30 && imc <= 34.9){
        classificacao = "Obesidade Grau I";
    }
    else if(imc >= 35 && imc <= 39.9){
        classificacao = "Obesidade Grau II";
    }
    else {
        classificacao = "Obesidade Grau III (Obesidade Grave!)";
    }

    document.getElementById("resultado").textContent = "Valor do IMC: " + imc;

    document.getElementById("resultadoclassificacao").textContent = " " + classificacao;
}

