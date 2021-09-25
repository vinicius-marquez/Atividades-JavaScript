function soma() {
    var vN1 = document.getElementById("N1").value;
    var vN2 = document.getElementById("N2").value;
    var vResultado;
    if (vN1!="" && vN2!="") {
         vResultado = parseInt(vN1) + parseInt(vN2);
    } else{
        vResultado = "Informe um número nas duas opções!";
    }
    
    alert (vResultado);
}