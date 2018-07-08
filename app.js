var name;
var firstQuestion;
var secondQuestion;
var thirdQuestion;

function send(){
name = document.getElementById("myName").value;
firstQuestion = document.getElementById("first").value;
secondQuestion = document.getElementById("second").value;
thirdQuestion = document.getElementById("third").value;
document.getElementById("form").reset();
document.getElementById("questions").reset();
document.getElementById('title').innerHTML = "Bem-vindo(a), " + name + "!";

if (firstQuestion != 'elefante') {
document.getElementById('primeiroerro').innerHTML = "<b>1)</b> Entre o elefante e o beija-flor, qual deles possui o metabolismo menos acelerado?</br>Resposta correta: <b>elefante</b>.";
document.getElementById('primeiroacerto').innerHTML = "";
} else {
document.getElementById('primeiroacerto').innerHTML = "<b>1)</b> Entre o elefante e o beija-flor, qual deles possui o metabolismo menos acelerado?</br>Resposta correta: <b>elefante</b>.";
document.getElementById('primeiroerro').innerHTML = "";
}
  
if (secondQuestion != 'urso') {
document.getElementById('segundoerro').innerHTML = "<b>2)</b> Entre a cobra e o urso, qual deles possui sangue quente?</br>Resposta correta: <b>urso</b>.";
document.getElementById('segundoacerto').innerHTML = "";
} else {
document.getElementById('segundoacerto').innerHTML = "<b>2)</b> Entre a cobra e o urso, qual deles possui sangue quente?</br>Resposta correta: <b>urso</b>.";
document.getElementById('segundoerro').innerHTML = "";
}

if (thirdQuestion != 'sapo') {
document.getElementById('terceiroerro').innerHTML = "<b>3)</b> Entre o coelho e o sapo, qual deles possui sangue frio?</br>Resposta correta: <b>sapo</b>.";
document.getElementById('terceiroacerto').innerHTML = "";
} else {
document.getElementById('terceiroacerto').innerHTML = "<b>3)</b> Entre o coelho e o sapo, qual deles possui sangue frio?</br>Resposta correta: <b>sapo</b>.";
document.getElementById('terceiroerro').innerHTML = "";
}

}

