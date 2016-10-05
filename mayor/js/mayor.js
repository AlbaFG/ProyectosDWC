var pideNumero = ("Escribe un número: ");
var numero1;
var numero2;

var mayor;
numero1 = parseInt(window.prompt(pideNumero));
numero2 = parseInt(window.prompt(pideNumero));
if(numero1 > numero2){
  window.alert("El número mayor es: " + numero1);
}else {
  window.alert("El número mayor es: " + numero2);
}
