function ligarDesliga(){
  var vImg = document.getElementById("lamp");
  
  if (vImg.src.indexOf("apagada.png") > -1) {
      vImg.src ="./img/acesa.png";

  } else {
      vImg.src ="./img/apagada.png";
  }

}