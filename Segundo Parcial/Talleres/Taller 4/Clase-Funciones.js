
function miFuncion(a,b,c){
    console.log(arguments.length);
    console.log('la suma es: ' + (a+b+c));
}
miFuncion(2,3,4);


function miReturn(a,b){
    return a+b;
}
let resultado = miReturn(2,3);
console.log(resultado);

/**Funcion tipo expresion
 * declaracion de una funcion que igual a una expresion
 */

let sumar = function(a,b){return a*b};
resultado = sumar(2,4);
console.log(typeof sumar);
console.log(resultado);

/**Funciones de tipo Self-Invoking
 * Porque son funciones que llaman a si mismas
 */

(function (a,b){
    console.log('Ejecutando la funcion:', (a+b));
})(3,4);

/**Funciones anonimas
 * No son comunes pero puede ser utiles en casos especificos.
 */

setTimeout(function (){
    console.log('Ejecutando funcion anonima.');
}, 1000);

const persona={
    nombre: 'Leo',
    saludar(){
        return `Hola soy ${this.nombre}`;
    },
    apellido:'Narvaez'
}
console.log(persona.saludar());

/**Funciones tipo flecha (arrow function) 
 * Se mantiene como una forma concisa de declarar funciones y es ampliamente usada.
*/

const sumarValores = (a,b) =>a+b;
console.log(sumarValores(3,6));

const operaciones ={ sumar:(a,b) => a+b, restar:(a,b)=>a-b};
    console.log(operaciones.sumar(2,3));
    console.log(operaciones.restar(2,3));