/**
 * Agregar elementos dentro de un array
 * 
 * push() agrega uno o mas elemento al final de un arreglo
 */

let p=[1,2,3,4];
p.push(5);
console.log(p);

/**
 * Para agregar al principio o inicio del arreglo, usamos la funcion unshift()
 */

let u=[1,2,3,4];
u.unshift(0);
console.log(u);

/**
 * splice() agrega o elimina elementos en cualquier posicion de un array
 */

let uq=[1,2,3,4];
uq.splice(1,0,5); //agregará 5 en la posicion 1, sin eliminar elementos que es representada por el 0
console.log(uq);

/**
 * Modificar elemento dentro de un array
 * 
 * Para acceder a un elemento de un array directamente por su indice y modificarlo
 */

let i=['Ana','Juan','Pedro','Jose'];
i[2]='Maria'; //Modifica en la posicion 2 Juan por Maria.
console.log(i);

/**Si se decide modificar el arreglo de forma inmutable, se puede utilizar
 * el metodo map()=> que crea un nuevo arreglo con los valores modificados.
 */
let arregloMap=[10,23,35,26];
let newArray=arregloMap.map(num => num === 23 ? 5:num);
console.log(newArray);

/**
 * Tambien podemos usar splice para modificar un elemento.
 */

let z =[1,2,3];
z.splice(1,1,5);
console.log(z);

/**Para eliminar elementos de array
 * podemos usar pop(), funcion que elimina el ulitmo elemento de un arreglo
 */

let arrE=['Azul','Amarillo','Blanco'];
arrE.pop();//Eliminaremos el ultimo elemento 'Blanco'
console.log(arrE);

/**
 * Tambien podemos usar splice para eliminar cualquier elemento de un arreglo.
 */

let arrQ=['Azul','Amarillo','Rojo','Negro'];
arrQ.splice(1,1); // de la posicion 1, eliminamos un elemento. (posicion, cantidad elementos a borrar).
console.log(arrQ);
