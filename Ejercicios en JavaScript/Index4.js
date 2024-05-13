
/*var num = 65;

document.write("<p>Hola, la variable es </p>", num);

num = 25;

document.write("<p>Ahora la variable es </p>", num);

num = 6;

document.write("<p>Ahora la variable es</p>", num);*/

//------------------------------------o--------------------------------------------



/*                ESTRUCTURAS DE CONTROL

                       "If": Si...
 Podemos indicar que se tome un camino sólo si se cumple la 
 condición que establezcamos. Si no se cumple no se ejecuta nada y 
 el programa sigue su curso.*/

/* var nota = 2;
document.write("Hola tu nota es ", nota);
//console.log("Hola tu nota es ", nota);

//Si el valor de la nota es igual o mayor a 8, nos aparece el mensaje «Exelente papa!!»
if(nota >= 8){ 
     document.write("<br>")
     document.write("Exelente papa!!")
     //console.log("Exelente papa!!");
}

//Si el valor de la nota es menor a 3, nos aparece el mensaje «Estas desaaprobado por gil»
if(nota >= 4){ 
    document.write("<br>")
    document.write("Estas aprobado")
    //console.log("Estas aprobado");
}

//Si el valor de la nota es igual o menor a 3, nos aparece el mensaje «Estas desaaprobado por gil»
if(nota <= 3){
    document.write("<br>")
    document.write("Desaprobado por gil")
    //console.log("Desaprobado por gil");
}*/




//----------------------------------o-----------------------------------------




/*                "If / else": Si / Sino...
 Si utilizamos if seguido de un else podemos establecer una acción “A” si se 
 cumple la condición, y una acción “B”. */

 /*var nota = 1;
 document.write("Hola tu nota es ", nota);

 if(nota == 10){ 
    document.write("<br>")
    document.write("Exelente papa!!")
 } else if(nota == 9){
    document.write("<br>")
    document.write("Muy bien che!")
 }
 if(nota >= 4){
    document.write("<br>")
    document.write("Aprobado")
 } else if(nota <= 3){
    document.write("<br>")
    document.write("Desaprobaste por gil")
 }*/



//-------------------------------------o---------------------------------------



/*                         "Switch":
        La estructura de control switch permite definir 
        casos específicos a realizar, mediante los "CASE" y 
        terminando con los "BREAK". */

/*var nota = 1;
document.write("Hola tu nota es ", nota);

switch (nota){
    case 10: // en caso de que tu nota sea 10 ....
    document.write("<br>");
    document.write("Exelente papa!!");
    break; //obligatorio¡¡

    case 9: // en caso de que tu nota sea 9 ....
    document.write("<br>");
    document.write("Muy bien che!");
    break;

    case 8:// en caso de que tu nota sea 8 ....
    case 7:
    case 6:
    case 5:
    case 4:
    document.write("<br>");
    document.write("Aprobado");
    break;

    case 3:
    case 2:
    case 1:
    case 0:
    document.write("<br>");
    document.write("Desaprobaste por gil");
    break;

    default:
        document.write("<br>");
        document.write("Nota no valida");
        break;
}*/



//----------------------------------o------------------------------------------



/*                "Operador ternario": "?"
El operador ternario es una alternativa de condicional if/else con una 
sintaxis más corta y, en muchos casos, más legible. */
            //solo permite una variable con dos resultados.

/*var nota = 2;
//COMPARACION LOGICA: nota <= || VALOR VERDADERO: si nota es <=3 || VALOR FALSO: si no desaprobado
var calificacion = nota <= 3 ? "desaprobado, estudia mas." : "aprobado.";
document.write("Hola tu trabajo esta  ", calificacion);*/




//---------------------------------o-----------------------------------------




/*             "If con && (AND)" - "If con || (OR)": 
    Podemos combinar el If con los operadores lógicos && (AND) y || (OR) para 
          describir condiciones más complejas.

- Utilizando && (AND) deben cumplirse todas las condiciones para que la 
      proposición sea verdadera. Caso contrario, será falsa.

- Utilizando || (OR) basta con que se cumpla una de las condiciones para que la 
      proposición sea verdadera.     */

/*var nota = 6;
var nombre = "Emanuel"*/

/*if(nota >5){
    if (nombre == "Emanuel"){
        document.write("Estas aprobado Emanuel");
    }
}*/

/*if (nota > 5 && nombre == "Emanuel"){
    document.write("Estas aprobado Emanuel");
}*/



/*var edad = 1;
var altura = 1.4;

if(edad >= 2){
    if (altura >= 1.4){
        document.write("Podes pasar");
    } else {
        document.write("No podes pasar");
    }
} else {
    document.write("No podes pasar");
}*/


/*var edad = 1;
var altura = 1.4;

if (edad >= 2 && altura >= 1.10 ){ // Solo si cumplis con estas 2 condiciones podes pasar (&&).
    document.write("Podes pasar");
} else {
    document.write("No podes pasar");
}
document.write("<br>")

if (edad >= 2 || altura >= 1.10 ){ // Si cumplis con alguna de estas 2 condiciones podes pasar (||).
    document.write("Podes pasar");
} else {
    document.write("No podes pasar");
}*/



//---------------------------------------o---------------------------------------------



/*               Bucles e Iteraciones: "While" (mientras):
- El bucle "while" se usa cuando el fin de la repetición de ciclos depende de una 
condición.
- Es muy importante que esa condición en un momento deje de ser 
   verdadera, para evitar que ocurra un loop infinito.    */

   /*var x = 0;
   while(x < 10){  //(Mientras que..) si se cumple esta condicion....
    document.write("<br> El valor de x es ",x); // el valor de x es 0
    x = x + 1; // es importante que esta condicion se cumpla.
   }*/


   /*                            "For" (para):
- La sintaxis de un bucle "for" , uno de los más usados, es más compacta y 
   rápida de escribir que la de un bucle while. Requiere inicializar la variable, 
    determinar la condición y definir el incremento al comienzo del bucle.
- Se suele usar cuando se conoce de antemano cuantas repeticiones se tienen que hacer.*/

for(var i=1; i <=15; i++) { // para que la variable i sea <=15
    document.write("<br> Numero de i = ", i);
};