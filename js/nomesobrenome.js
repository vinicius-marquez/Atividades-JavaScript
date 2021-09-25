function nomesobrenome () {
var vName = document.getElementById ("name").value;
var vSobrenome = document.getElementById ("sobrenome").value;

var vResultado = "Olá" + " " + vName + " " + vSobrenome + "!";
document.getElementById ("resultado").innerHTML = vResultado;
}