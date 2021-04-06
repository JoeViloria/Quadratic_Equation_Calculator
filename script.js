// Programa para resolver ecuaciones cuadráticas
var a, b, c;
var discriminante;
var texto_salida;
var raiz1, raiz2;
var parteReal;
var parteImaginaria;

function validar() {

// Coeficientes
a = document.forms["entrada_forma"]["terminoa"].value;
b = document.forms["entrada_forma"]["terminob"].value;
c = document.forms["entrada_forma"]["terminoc"].value;

// Calcular discriminante
discriminante = b * b - 4 * a * c;

//Validar a, b, b
if (a == 0) {
    texto_salida = "Ups! Recuerda que <em>a</em> no puede ser cero.";
} else if (isNaN(a)) {
    texto_salida = "<em>a</em> debe ser un número."
} else if (isNaN(b)) {
    texto_salida = "<em>b</em> debe ser un número.";
} else if (isNaN(c)) {
    texto_salida = "<em>c</em> debe ser un número.";
}

// Condición para raíces reales y diferentes
else if (discriminante > 0) {
    raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    texto_salida = "Las raíces para la ecuación " + (a == 1 ? " " : a) + "x\u00B2 + " + (b == 1 ? " " : b) + "x + " + c + " = 0, son: X\u2081 = " + raiz1.toFixed(2) + " y X\u2082 = " + raiz2.toFixed(2);
}

// Condición para raíces reales e iguales
else if (discriminante == 0) {
    raiz1 = raiz2 = -b / (2 * a);

    texto_salida = "Las raíces para la ecuación " + (a == 1 ? " " : a) + "x\u00B2 + " + (b == 1 ? " " : b) + "x + " + c + " = 0, son: X\u2081 = " + raiz1.toFixed(2) + " y X\u2082 = " + raiz2.toFixed(2);
}

// Condición para raíces imaginarias
else {
    parteReal = (-b / (2 * a)).toFixed(2);
    parteImaginaria = (Math.sqrt(-discriminante) / (2 * a)).toFixed(2);

    texto_salida = "Las raíces para la ecuación " + (a == 1 ? " " : a) + "x\u00B2 + " + (b == 1 ? " " : b) + "x + " + c + " = 0, son: X\u2081 = " + `${parteReal} + ${parteImaginaria}i` + " y X\u2082 = " + `${parteReal} - ${parteImaginaria}i`;
  }

//Resultado en pantalla
document.getElementById("texto_salida").innerHTML = texto_salida;
 }