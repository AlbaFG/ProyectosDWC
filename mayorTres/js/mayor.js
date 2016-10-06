const MENSAJE = "Teclea número";
      MENOR = "El menor es: ";
      var numero1;
      var numero2;
      var numero3;

function recibirNumero(){
  return parseInt(prompt(MENSAJE));
}
var numero1 = recibirNumero();
var numero2 = recibirNumero();
var numero3 = recibirNumero();

function mostrarNumero(){

if (numero1 < numero2 && numero1 < numero3 ){
   window.alert(MENOR + numero1);
}else if (numero2 < numero1 && numero2 < numero3) {
    window.alert(MENOR + numero2);
}else{
   window.alert(MENOR + numero3);
}
    return window.alert;
}

var numero1,numero2,numero3 = mostrarNumero();
