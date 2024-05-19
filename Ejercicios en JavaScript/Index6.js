

/*                                OBJETOS:   

Las propiedades de un objeto definen las características del mismo. Se accede a las 
propiedades de un objeto con la notación punto.
- Tanto el nombre del objeto como el nombre de la propiedad son sensibles a 
    mayúsculas y minúsculas*/

/*                           ¿Cómo se crean?
        - Se puede crear usando el operador de asignación. Y puedes definir 
          propiedades simplemente asignándoles un valor. Por ejemplo, vamos a crear 
         un objeto llamado miAuto y le vamos a asignar propiedades denominadas 
         marca, tipo, y modelo de la siguiente manera:*/

//objeto
let casa = new Object();
//propiedades
casa.habitaciones = 3;
casa.metros = 40;
casa.calle = "Av. Ratti";
casa.numero = 2401;
casa.precio = 500000;
casa.enAlquiler = true;

//metodo: "mostrar domicilio del objeto 'casa' "
casa.mostrarDomicilio = function(){
    document.write("<br> El domicilio de la casa es ", casa.calle, " " , casa.numero, " . ");
}

if(casa.enAlquiler == false){
    document.write("<br> La casa esta en alquiler.");
}else{
    document.write("<br> La casa NO SE ALQUILA.");
}

//se llama al metodo (funcion)
casa.mostrarDomicilio();

document.write("<br> El precio de la casa es de u$s ", casa.precio);
document.write("<br> Los metros cuadrados de la casa son de ", casa.metros);



//------------------------------------------o--------------------------------------------------



/*      - Se pueden crear también mediante un iniciador de objeto (o literal), que es 
         una lista delimitada por comas de cero o más pares de nombres de 
         propiedad y valores asociados al objeto, encerrados entre llaves ({}): */

// Creamos el objeto 'mascota'
let mascota = {
    especie: " canino ",
    raza: " golden " ,  //propiedades
    edad: 5,
    color: " negro ",
    vacunaSextuple: true,
    enAdopcion: false,
    peso: 10,

// creamos el metodo
// 1er metodo LISTAR
listar : function(){
    document.write("<br> Especie ",this.especie, "<br>Raza ",this.raza,"<br>Edad ",this.edad,"<br>Color ", this.color)},
// 2do metodo LADRAR
ladrar : function(){
    console.log("guau-guau")
            },    
}
//se llama al objeto 'mascota'
console.log(mascota);
console.log("La mascota es de especie",mascota.especie);
console.log("La mascota es de raza",mascota.raza);
console.log("La mascota tiene de edad",mascota.edad);
console.log("El color de la mascota es",mascota.color);

//se llama al metodo (listar)al html
(mascota.listar());
//se llama al metodo (ladrar) en la consola
(mascota.ladrar());

//se pueden modificar las "propiedades" dentro del "objeto"
mascota['color'] = "blanco";
//se lo muestra por consola
console.log(mascota); 


//------------------------------------------o--------------------------------------------------


/*      - Se pueden crear también con Las clases, que son una suerte de “molde” 
         que podemos usar para crear varios objetos del mismo tipo. Usamos un "constructor"
          y "this" para asignar valores a las propiedades de los objetos instanciados:*/


    // creamos en una clase EL OBJETO "animal" (siempre la 1ra letra con mayuscula)
    class Animal{
          constructor(especie,raza,edad,color,vacuna,enAdopcion,peso){// se crea el "constructor con sus valores"
            this.esp = especie// se crean sus "propiedades" (animal.esp)
            this.raz = raza // (animal.raz)
            this.eda = edad// (animal.eda)
            this.col = color
            this.vac = vacuna
            this.ado = enAdopcion
            this.pes = peso
          }
    // SE CREA EL METODO
    caminar(){
        console.log(this.raz,"Estoy caminando");
    }
} //                                   HASTA ACA DEFINI SOLO UNA CLASE Y SU MOLDE!!!


// Instanciamos dos objetos y declaro "new" y la clase "Animal" y le pasamos los parametros
//Declaramos el OBJETO "mascota1" y sus propiedades
let mascota1 = new Animal("Canino","Golden",5,"Dorado",true,true,10);
//Declaramos OBJETO "mascota2" y sus propiedades
let mascota2 = new Animal("felino","siames",3,"negro",false,true,3);

//se llama al OBJETO "mascota1"
console.log(mascota1);
//se llama al OBJETO "mascota2"
console.log(mascota2);
//se llama al OBJETO  y a su PROPIEDAD
console.log(mascota1.raz);
//llama al "METODO" caminar
mascota1.caminar();
//se pueden modificar las propiedades del objeto
mascota1.esp = "equino"
console.log(mascota1);
//se le pueden agregar propiedades al objeto
mascota1.colas = 2;
console.log(mascota1);
console.log(mascota1.colas);


//------------------------------------------o--------------------------------------------------

        /*Cuando hablamos de una variable que posee información de texto, decimos 
             que su tipo de dato es String. */

//defino la cadena como variable
let texto1 = "Cadena como variable";
let vacio = ""
//defino a la cadena como objeto
let texto2 = new String("Cadena como objeto");
//llamo a la variable
 console.log(texto1);
 //llamo al objeto
 console.log(texto2);


 /*---------------- REVISAR PARA PRACTICAR "String | Propiedades y métodos" EN LA DIAPOSITIVA 15 -------------------------*/