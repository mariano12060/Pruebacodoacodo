
//comentario en linea (Alt + Shift + flecha) V (Alt + flecha)

/*comentario de 
bloque (multilinea)*/

console.log("Hola a todos") // estas instrucciones muestran info por consola
console.info("Hola a todos esto es una info")
console.warn("Hola a todos esta es una advertencia warn")
console.error("Hola a todos este es un error")
console.log("La suma de 6+5 es:",6+5)
//document.write("<h2 style='color: red;'> Texto incorporado por JS.")


    /* .Estructura de las variables:
          ● NOMBRE
          ● TIPO DE DATO
          ● CONTENIDO 
    . VARIABLES: Es un pequeño espacio en la memoria, donde se guarda un dato, 
    - Se llaman variables porque pueden cambiar su valor a lo largo del programa. 
    - Un programa puede tener muchas variables, y cada una de ellas tendrá un 
        nombre que la identifique, un valor y un tipo de dato.
    ● NOMBRES de las variables (o identificadores) debe comenzar con una letra o,
        ( _ ), ( $ ), o dígitos ( 0 - 9 ).
    ● TIPO DE DATO puede ser número (number), texto (string), valores booleanos (boolean), 
        indefinidos o sin inicializar (undefined), etc.
    ● CONTENIDO */


//DECLARADO EN EL DOCUMENTO HTML
var num = 20;

document.write("<p>Hola, la variable es </p>", num);

num = 18;

document.write("<p>Ahora la variable es </p>", num);

num = 150;

document.write("<p>Ahora la variable es </p>", num);
//DECLARADO EN EL DOCUMENTO HTML


//DECLARADO EN LA CONSOLA
var IVA= 21;
IVA= 10;
console.log(IVA);

var resultado= (1 + 3) * 2;
console.log(resultado);

/*Las constantes no se pueden cambiaar una vez declaradas, quedan para siempre.
Si intentamos modificar el valor de una constante, obtenemos un error.*/
const PI= 3.141592;
console.log(PI);

var x; // ahora x es indefinido (no tiene un valor definido)
x = 5;
console.log(x) // ahora es numérico (5)
x = "Juan";
console.log(x) // ahora es una cadena de caracteres o string ("Juan")


//Identificar el tipo de dato de una variable
var s="Hola me llamo Mariano";
console.log(s);
var n = 28;
console.log(n);
var b= 25<10;
console.log(b);
var u;
/*Para determinar qué tipo de dato tiene una variable utilizamos typeOf() */
console.log(typeof s);
console.log(typeof n);
console.log(typeof b);
console.log(typeof u);
//DECLARADO EN LA CONSOLA