                 
                 
                                
/*                              FUNCIONES:

               Para usar funciones es necesario hacer dos cosas:
● DECLARAR LA FUNCION: crear la función es darle un nombre, definir los datos de entrada 
(opcional) e indicar las tareas (instrucciones) que realizará y qué valor retornará 
(opcional).
● EJECUTAR LA FUNCION «Llamar» a la función para que realice las tareas del 
código que aloja. Se puede invocar una misma función la cantidad de veces que se 
necesita desde el programa principal.

- El nombre de la función tiene que ser significativo y describir lo que hace.
● Nombres simples, claros.
● Representativos de la tarea que realiza la función.
● Verbos en infinitivo (-ar, -er, -ir).
● Si es más de una palabra, utilizar la nomenclatura camelCase.*/


// 1RO SE DECLARA LA FUNCION   <----
function saludar(){
    document.write("Hola comision 24148 soy una funcion" );
    var a = 10; var b = 20; var c = a + b;
    document.write("<br> <br> Hola de nuevo, soy una variable dentro de una funcion y mi valor es ",c);
}
// 2DO SE EJECUTA LA FUNCION   <----
saludar();

/*function tabla_del_cinco(){
for (i = 1; i <= 10; i++) {document.write("<br> 5 x ", i, " = ", 5 * i)}
};
document.write("<br> - Hago una funcion con el codigo");
tabla_del_cinco();
document.write("<br> - Hago otra nueva funcion con el codigo");
tabla_del_cinco();
document.write("<br> - Esta es otra funcion con el codigo");
tabla_del_cinco();*/



//                    Parámetros y Argumentos:

/*Los PARAMETROS son las variables que ponemos cuando se define una 
función. En la siguiente función tenemos dos parámetros “A” y “B”:*/
/*function sumar(parametroA,parametroB){
document.write("<br><br> Hola soy la funcion SUMAR y mi valor es la ", 
    "suma de los parametroA y parametroB: ",parametroA + parametroB);
}*/
/*Los ARGUMENTOS son los valores que se pasan a la función cuando ésta es 
invocada, {“8" reemplaza a "A"} y {“5” reemplaza a "B}:*/
/*sumar(8,5);*/

// DOCUMENTACION: la funcion SUMAR lo que hace es sumar los dos terminos que se le envian. importante¡¡ enviar datos del tipo numeros.
document.write("<br>")
/*function saludarDos(miNombre){
    document.write("Hola, como estas ", miNombre, "?");
}

saludarDos("Mariano")*/

/*function tablaMultiplicar(tabla, hasta){ //tabla del 2 hasta el 11
    for (var i = 1; i <= hasta; i++)
    console.log(" 2 x ", i, " = ", tabla * i);
}

tablaMultiplicar(2,10);*/


/*                        Parámetros múltiples:
- Se evalúa la mayoría de edad de una persona*/

// Declaración
function mayoriaEdad(miApellido, miNombre, miEdad){
    document.write("Apellido y nombre: " + miApellido + ", " + miNombre)
    if (miEdad >= 18) {
    document.write(" Es mayor de edad " + " ( " + miEdad + " ) ")}
    else{
    document.write(" No es mayor de edad " + " ( " + miEdad + " ) ")}
    }
// Ejecución
var ape= prompt("Ingrese su apellido")
var nom= prompt("Ingrese su nombre")
var edad= prompt("Ingrese su edad")
mayoriaEdad(ape, nom, edad)

document.write("<br>")

/*                            Devolución de valores:

    - Una función puede devolver información, para ser utilizada o almacenada en 
       una variable. Se utiliza la palabra clave "return", que regresa un valor y finaliza 
        la ejecución de la función. Si existe código después del return, nunca será 
          ejecutado. Puede haber más de un return por función.*/

function sumar(num1,num2){
    return num1 + num2;    // Devolvemos la suma de a y b al exterior de la función
}
var a = 5; var b = 5; var resultado = a + b; // Se guarda 10 en la variable resultado
document.write("La suma entre ", a, " y ", b, " es ", resultado, " osea que soy una funcion RETURN");

document.write("<br>")
//EJEMPLO DEL USO:
if(resultado >= 20){ //si el resultado en mayor a 20.....
    document.write("Estas gastando mucho dinero");
}else{  //sino.....
    document.write("No estas gastando mucho dinero");
}

document.write("<br>")



/*                      Función flecha (arrow Function):

                - Permiten definir funciones de manera más fácil,
        breve y rápida, aunque están limitadas a funciones más simples.*/

// Función tradicional 
function cuadrado(x){ 
    return x*x
   }
   document.write("Hola soy una funcion RETURN tradicional y mi valor es ", cuadrado(2));

   document.write("<br>")
// Función Flecha (Arrow)
var aCuadrado = x => x*x
document.write("Hola soy una funcion FLECHA y mi valor es ", aCuadrado(6));
   