
var num = 70;

document.write("<p>Hola, la variable es </p>", num);

num = 69;

document.write("<p>Ahora la variable es </p>", num);

num = 5;

document.write("<p>Ahora la variable es </p>", num);



//---------------------------------o-----------------------------------


/*Operadores de  comparación: compara sus operandos y devuelve un true o false.
Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos.*/

num1 = 10;
num2 = 10;
num3 = "10";

console.log(num1 = num2);
console.log(num1 === num3);
console.log(num1 == num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

console.log("--------------------------------------------")

/*Operadores lógicos: Los operadores lógicos se utilizan normalmente con valores 
booleanos (lógicos).*/

// Y lógico (Conjunción)
a = true;
b = false;
console.log(a && b);// && (Conjunción)
a = true;         
b = true;          
console.log(a && b);

console.log("-")

// O lógico (Disyunción)
a = true;
b = false;
console.log(a || b);// || (Disyunción)
a = false;
b = false;
console.log(a || b);

console.log("-")

// NO lógico (Negación)
a = true;
b = false;
console.log(!a);// ! (Negación)
console.log(!b);

console.log("------------------------------------------")

/*Operadores prefijo y posfijo: Cuando hablamos de prefijo nos referimos a que se antepone a la variable y 
el posfijo se pospone. Se utilizan para realizar operaciones aritméticas, tanto 
para incrementar como para decrementar el valor de una variable.*/
a = 10; 
console.log(a); // 10 
console.log(++a) // 11 incremento posfijo
console.log(++a); // 12 incremento posfijo
console.log(a++); // 12 incremento prefijo

console.log("--");

b = 9;
console.log(b); // 9
console.log(--b); // 8 decremento posfijo 
console.log(--b); // 7 decremento posfijo 
console.log(b--); // 7 decremento prefijo

console.log("-----------------------------------------")

/*Operadores de asignación
No solamente el = (igual) es un operador de asignación.*/
a = 5;
b = 10;

a /= b;
console.log(a);

a *= b;
console.log(a);

a += b;
console.log(a);

a -= b;
console.log(a);

a **= b;
console.log(a);