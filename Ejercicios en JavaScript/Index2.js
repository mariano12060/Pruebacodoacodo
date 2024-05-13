
var num = 55;

document.write("<p>Hola, la variable es </p>", num);

num = 98;

document.write("<p>Ahora la variable es </p>", num);

num = 10;

document.write("<p>Ahora la variable es </p>", num);



       //COMPROBACION NUMERICA:

var n = 50;
console.log(n);
console.log(Number.isFinite(n)); //true (es un n° finito)
var n = 50/0;
console.log(n);
console.log(Number.isFinite(n)); // false (no es un n° finito)

var n = 60;
console.log(n);
console.log(Number.isInteger(n)); // true (es un n° entero)
var n = 60.3;
console.log(n);
console.log(Number.isInteger(n)); // false (no es un n° entero)

var n = 1e15;
console.log(n);
console.log(Number.isSafeInteger(n)); // true (es un n° entero seguro)
var n = 1e17;
console.log(n);
console.log(Number.isSafeInteger(n)); // false (no es un n° entero seguro)

var n = NaN; // (NaN)"not a number"
console.log(n);
console.log(Number.isNaN(n)); // true (no es un n°)
var n = 6;
console.log(n);
console.log(Number.isNaN(n)); // false (es un n°)

console.log("-------------------------");


//---------------------------------------o---------------------------------------//

/*CONVERSION NUMERICA: Convierte cadenas de texto en números, para posteriormente 
realizar operaciones con ellos.
- Si la variable de texto comienza por un valor
 que no es numérico, parseInt() devuelve un NaN (Not a Number).*/


var n = "42 años";
console.log(n);
console.log(typeof n);

console.log("-------------------------");

nnumerica = Number.parseInt(n);
x = Number.parseInt(n) + 5;
console.log(x);
console.log(Number.parseInt(n));
console.log(typeof parseInt(n));

console.log("-------------------------");

Number.parseInt("11101", 2);  // 29 en binario
console.log(Number.parseInt("11101", 2));
console.log(typeof Number,parseInt("11101", 2));

console.log("-------------------------");


/*Operadores aritméticos y de asignación: El operador de asignación (=) le 
otorga un valor a una variable y se coloca entre la variable y el valor a 
asignar.*/
var num1 = 10;
var num2 = 5;

console.log("El primer numero es:", num1);
console.log("El segundo numero es:", num2);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(++num2);
console.log(--num1);

console.log("-------------------------");

/*Operadores de cadena y números: Los operadores + y += también se pueden utilizar para agregar (concatenar) 
cadenas. En este contexto, el operador + se denomina operador de 
concatenación.*/

var nomb1 = "Mariano";
var nomb2 = "Emanuel";
var nomb3 = "Martinez";
var nomb4 = (nomb1 + " " + nomb2 + " " + nomb3);
console.log(nomb1);
console.log(nomb2);
console.log(nomb3);
console.log(nomb4);

var txt4 = "Bienvenidos ";
txt4 += "a Javascript";
console.log(txt4);

console.log("-------------------------");

/*Función prompt():Se utiliza para solicitarle al usuario
   que ingrese datos por medio del teclado*/

/*var nombre = prompt("Ingrese su nombre","");
console.log("Hola, bienvenido",nombre);
document.write("Hola, bienvenido",nombre);*/