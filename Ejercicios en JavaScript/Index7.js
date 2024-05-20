

/*                          Array:
    Un array, también conocido como arreglo o vector, es una colección o 
      agrupación de elementos en una misma variable.
- Los elementos del array pueden ser datos de diferentes tipos.
-  Cada elemento dentro del array posee un índice, un valor que nos permite 
      identificarlo. */

//definimos la propiedad (variable) "vectorcito" y un objeto de tipo "array" y se definen sus elementos
    let vectorcito = new Array("German", "Gonzalo", "Leandro", "Alejandro", "Mariano", "Franco");
    //----------------------se definio el ARRAY---------------------
//llamamos a la variable
    console.log(vectorcito);
//llamamos al elemento
    console.log(vectorcito[3]);
    document.write("El elemento 3 de la variable vectorcito es: ", vectorcito[3]);
//llamamos a la propiedad "vectorcito.length" y devuelve la cantidad de elementos que tiene
    console.log(vectorcito.length);
    //con el length -1 me dice el ultimo subindice (ultimo elemento)
    console.log(vectorcito.length -1);


/*                          Array: Literales   */
//definimos la variable "vector2" y entre corchetes[] sus elementos
let vector2 = ["Rojo", "Verde", "Blanco", "Azul", true, 5];
//----------------------se definio el ARRAY---------------------
//llamamos a la variable
console.log(vector2);
//llamamos al elemento
console.log(vector2[4]);
document.write("<br> El elemento 4 de la variable vector2 es: ", vector2[4]);
//llamamos a la propiedad "vector2.length" y devuelve la cantidad de elementos que tiene
console.log(vector2.length);
console.log(vector2.length -2);

//---------------------------------------------------------------------------------------------------------
//                               recorrer un ARRAY y mostrar cosas

//"Cuando i vale 0; que i sea menor que vectorcito.length; y lo sumamos de uno en uno
for(let i = 0; i < vectorcito.length; ++i){
    document.write("<br> Vector: Elemento numero: ", i, ". Valor: ", vectorcito[i]);
    console.log("Vector: Elemento numero:", i, ". Valor: ", vectorcito[i]);
    //"Cuando i vale 0,
    //"<br> Vector: Elemento numero: ", 0, ". Valor: ", vectorcito[0] "
    //"Cuando i vale 1,
    //"<br> Vector: Elemento numero: ", 1, ". Valor: ", vectorcito[1] "
    //"Cuando i vale 2,
    //"<br> Vector: Elemento numero: ", 2, ". Valor: ", vectorcito[2] "
}

document.write("<br><br>");
let i = 0;
//Mientras que i sea menor que vectorcito.length
while(i < vectorcito.length){
    document.write("<br> Vector: Elemento numero: ", i, ". Valor: ", vectorcito[i]);
    i = i + 1 
}


//-------------------------------------o------------------------------------------

/*                          Métodos: Push y Pop
        El método "push" agrega elementos al final de una lista, y el método 
          "pop" los elimina, también desde el final */

let frutas = ["Manzana","Pera","Banana"];
console.log(frutas);
//con "push" agrego elementos
frutas.push("Kiwi");
console.log(frutas);
//hago push y agrego
frutas.push("Frutilla","Durazno","Uva");
//llamo al elemento
console.log(frutas);

//con pop traigo al ultimo elemento agregado
console.log(frutas.pop());
//aca muestra la lista de elementos con el ultimo eliminado
console.log(frutas);


/*                         Metodos: Unshift y Shift
       El método unshift agrega elementos al comienzo de un array.
       Por su parte, shift elimina el primer elemento y devuelve su valor. */

//agrego con unshift un elemento al principio
frutas.unshift("Ciruelas");
console.log(frutas);
//con shift traigo al primer elemento agregado
console.log(frutas.shift());
//aca muestra la lista de elementos con el primero eliminado
console.log(frutas);


//-----------------------------------------o----------------------------------------

/*                           Métodos: Concat
       El método concat se usa para unir dos o más arrays. Este método no cambia 
       los arrays existentes, sino que devuelve un nuevo array.  */

//creo al 1er vector "colores"
let colores = ["Blanco","Rojo"];
console.log(colores);
//creo al 2do vector "masColores"
let masColores = ["Negro","Bordo"];
console.log(masColores);
//Los elementos de "masColores" se concatenan al final de los elementos de "colores":
let todos = colores.concat(masColores);
console.log(todos);


//----------------------------------------o--------------------------------------------

/*                            Métodos: IndexOf y LastIndexOf 
        Estos métodos devuelven la posición (índice) en la que se encuentra el valor 
         buscado, a partir de la posición dada. IndexOf lo hace contando desde el 
          principio del arreglo, y LastIndexOf lo hace desde el final. */

let letras = ["A", "B", "C", "D", "E", "B", "C"]
//buscamos la posicion de la 1ra letra "B" con el metodo indexOf
//Buscamos de izquierda a derecha
let posB1 = letras.indexOf("B");
console.log("La primera 'B' tiene indice",posB1);
//corroboramos que esta en esa posicion
console.log(letras);

//buscamos la posicion de la 2da letra "B" con el metodo indexOf
let posB2 = letras.indexOf("B",2)
console.log("La segunda 'B' tiene indice",posB2);
//corroboramos que esta en esa posicion
console.log(letras);

//buscamos la posicion de la letra "A" con el metodo lastIndexOf
//Buscamos de derecha a izquierda
let posA = letras.lastIndexOf("A");
console.log("La última 'A' tiene indice",posA);
console.log(letras);

//buscamos la posicion de la letra "B" con el metodo lastIndexOf
let posB = letras.lastIndexOf("B");
console.log("La última 'B' tiene indice",posB);
console.log(letras);

//-------------------------------------------o-------------------------------------------

/*                           Métodos: Splice y Slice
      slice(inicio, final) retorna la copia de un arreglo desde el índice inicio hasta 
       final, excluyendo el final. No modifica el arreglo original.
     - Splice realiza operaciones sobre el arreglo, modificándolo. Es muy versátil, y 
        permite tanto quitar elementos como agregarlos.*/

//declaro un arreglo con sus elementos
let arreglo = ['a','b','c','d','e','f']
//con el elemento "slice" me va a traer los subindices 1 y 3
 let trozo1 = arreglo.slice(1,3);
 //con el elemento "slice" me va a traer el subindice 5
 let trozo2 = arreglo.slice(5);

console.log(arreglo);
console.log(trozo1);
console.log(trozo2);


let arreglo2 = ['a','b','c','d']
//con el elemento "splice"-->en la posicion 2 "c", sin eliminar ningun elemento "0", agregue la "n"
arreglo2.splice(2,0,'n');
console.log(arreglo2);
//con el elemento "splice"-->en la posicion 1 "b", eliminando un elemento "1", agregue la "t"
arreglo2.splice(1,1,'t')
console.log(arreglo2)


//------------------------------------o---------------------------------------

/*                         Metodos: Sort y Reverse
    Estos métodos ordenan e invierten el orden, respectivamente, de un arreglo. 
    Para que funcione correctamente, debemos asegurarnos que todos los 
    elementos del arreglo sean del mismo tipo. */

//el metodo "sort" me ordena los elementos de menor a mayor
arreglo2.sort();
console.log(arreglo2); 
//el metodo "reverse" me ordena los elementos de mayor a menor
arreglo2.reverse();
console.log(arreglo2);


//------------------------------------o-----------------------------------------

/*                       Web Storage: "localStorage y SessionStorage:"      
       - El objeto "localStorage" almacena datos sin fecha de vencimiento. Los datos 
        no se eliminarán cuando se cierre el navegador y estarán disponibles en 
        cualquier momento futuro. 
       - localStorage puede realizar esta tarea mediante los métodos "setItem" y 
        "getItem", que permiten guardar y recuperar información. Los datos se 
        almacenan en formato de texto, como pares clave / valor. */

console.log(typeof(Storage));

//EL SIGUIENTE CODIGO ALMACENA DATOS MEDIANTE "localStorage":

if(typeof(Storage) !== "undefined"){//"si typeof(Storage) me da diferente a undefined--->guardar" 
    // setItem guarda datos en el dispositivo
    localStorage.setItem("apellido", "Martinez");
    localStorage.setItem("nombre", "Mariano");
    localStorage.setItem("Sexo","Masculino");
    localStorage.setItem("DNI",35230286);
    console.log("Datos guardados.");
   } else{// si no--->
    console.log("Web Storage no soportado.");
   }
   
//EL SIGUIENTE CODIGO RECUPERA DATOS MEDIANTE "localStorage":

   if (typeof(Storage) !== "undefined"){//"si typeof(Storage) me da diferente a undefined--->rECUPERAR"
    // getItem recupera datos del dispositivo
    //lo guardo en una variable
    let apeDelVisitante = localStorage.getItem("apellido");
    let nomDelVisitante = localStorage.getItem("nombre");
    console.log("Bienvenido de nuevo Sr.", apeDelVisitante + " " + nomDelVisitante);
    document.write("<br><br>Bienvenido de nuevo Sr.", apeDelVisitante + " " + nomDelVisitante);
}else{
    console.log("Web Storage no soportado.");
   }


//----------------------------------------o-----------------------------------------


/*                            SessionStorage:
       Los datos almacenados en "sessionStorage" son eliminados cuando finaliza la sesión de 
       navegación, habitualmente al cerrar la pestaña en la que se muestra la página.*/

       if(typeof(Storage) !== "undefined"){
        sessionStorage.setItem("apellido", "Martinez");
        sessionStorage.setItem("nombre", "Mariano");
        sessionStorage.setItem("Sexo","Masculino");
        sessionStorage.setItem("DNI",35230286);
       };


       if (typeof(Storage) !== "undefined"){
        let apeDelVisitante = localStorage.getItem("apellido");
        let nomDelVisitante = localStorage.getItem("nombre");
        console.log("Bienvenido de nuevo Sr.", apeDelVisitante + " " + nomDelVisitante);
        document.write("<br><br>Bienvenido de nuevo Sr.", apeDelVisitante + " " + nomDelVisitante);
       }
