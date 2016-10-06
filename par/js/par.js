const PIDE_NUMERO = "Introduce el número";
      RESPUESTA_PAR = "El número es: par";
      RESPUESTA_IMPAR = "El número es: impar";
var numero = parseInt(window.prompt(PIDE_NUMERO));
esImpar = numero % 2;
window.alert(esImpar ? RESPUESTA_IMPAR :
RESPUESTA_PAR);
