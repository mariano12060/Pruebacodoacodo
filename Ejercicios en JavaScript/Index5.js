                 
                 
                                
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

function tabla_del_cinco(){
for (i = 1; i <= 10; i++) {document.write("<br> 5 x ", i, " = ", 5 * i)}
};
document.write("<br> - Hago una funcion con el codigo");
tabla_del_cinco();
document.write("<br> - Hago otra nueva funcion con el codigo");
tabla_del_cinco();
document.write("<br> - Esta es otra funcion con el codigo");
tabla_del_cinco();



//                    Parámetros y Argumentos:

/*Los PARAMETROS son las variables que ponemos cuando se define una 
función. En la siguiente función tenemos dos parámetros “A” y “B”:*/

function sumar(parametroA,parametroB){
document.write("<br><br> Hola soy la funcion SUMAR y mi valor es la ", 
    "suma de los parametroA y parametroB: ",parametroA + parametroB);
};

/*Los ARGUMENTOS son los valores que se pasan a la función cuando ésta es 
invocada, {“8" reemplaza a "A"} y {“5” reemplaza a "B}:*/
/*sumar(8,5);*/

// DOCUMENTACION: la funcion SUMAR lo que hace es sumar los dos terminos que se le envian. importante¡¡ enviar datos del tipo numeros.
document.write("<br>")
function saludarDos(miNombre){
    document.write("Hola, como estas ", miNombre, "?");
}

saludarDos("Mariano")

function tablaMultiplicar(tabla, hasta){ //tabla del 2 hasta el 11
    for (var i = 1; i <= hasta; i++)
    console.log(" 2 x ", i, " = ", tabla * i);
}

tablaMultiplicar(2,10);


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
   
document.write("<br>")

var aSumar = (num1,num2) => 4+6; /*Mantenemos los parámetros entre paréntesis y colocamos 
a la derecha lo que devolverá la función.*/
document.write("Hola soy otra funcion FLECHA y mi valor es ", aSumar(4,6));



/*                                 Scope (alcance):
    El scope (alcance) determina la accesibilidad (visibilidad) de las variables.
      - En JavaScript hay dos tipos de alcance:
   ● Alcance local (por ejemplo, una función).
   ● Alcance global (entorno completo de JavaScript).
          - Las variables definidas dentro de una función no son accesibles (visibles) 
            desde fuera. La función “crea un ámbito cerrado” que impide el acceso a una 
            variable de su interior desde fuera de ella o desde otras funciones.*/


            /*VARIABLES LOCALES: Podremos acceder al contenido de la 
                 variable carName solamente dentro de la función.*/

// aca no puedo usar la variable carName
function myFunction() {
    var carName = "Volvo"
    // aca si puedo usar la variable carName
   }
   // aca no puedo usar la variable carName


        /*VARIABLES GLOBALES: En este caso podremos acceder al contenido la variable 
               carName tanto desde fuera como desde adentro de la función.*/

   var carName2 = "Fiat"
 // aqui si puedo usar carName2
function myFunction() {
 // aqui tambien puedo usar la variable carName2
}

document.write("<br>")

/*                              let y var:
   "let" declara una variable de alcance local, limitando su alcance (scope) al 
    bloque, declaración, o expresión donde se está usando. "var" define una 
      variable global o local en una función sin importar el ámbito del bloque.*/

      var a = 5
      var b = 10
    if (a === 5) {
    let a = 4 // El alcance es dentro del bloque if
    var b = 15 // El alcance es global, sobreescribe a 10
    document.write(a) // 4, por alcance a nivel de bloque
    document.write(b) // 15, por alcance global
}
document.write(a) // 5, por alcance global
document.write(b) // 15, por alcance global