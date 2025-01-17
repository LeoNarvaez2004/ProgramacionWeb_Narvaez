/** 1. Funciones Callback
 *  Callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que 
 *  alguna operación ha sido completada. Se utilizan para asegurar que cierto código no se ejecute hasta 
 *  que otro código haya terminado de ejecutarse.
 */
// Ejemplo 
function greet (name, callback){ // Función que recibe un nombre y una función callback
    console.log(`Hola ${name}`);
    callback();
}

function callback(){
    console.log('Adios');
}

greet('Leo',callback);

// Ejemplo 2
function sumar(a,b,callback){
    let resultado = a+b;
    callback(resultado);
}

function callbackResultado(resultado){
    console.log('Resultado: ',resultado);
}

sumar(5,3,callbackResultado);

/** 2. Set Intervall
 *  SetInterval es una función que se utiliza para ejecutar una función cada cierto tiempo.
 *  El tiempo se especifica en milisegundos.
 *  La función setInterval() continua ejecutando la función hasta que se llama a clearInterval().
 *  clearInterval() se utiliza para detener la ejecución de la función.
 */ 

// Ejemplo
let contador = 0;
let intervalo = setInterval(function(){
    console.log(contador);
    contador++;
    if(contador === 5){
        clearInterval(intervalo);
    }
},1000);

// Ejemplo 2    
let contador2 = 0;
let intervalo2 = setInterval(function(){
    console.log('Hola');
    contador2++;
    if(contador2 === 2){
        clearInterval(intervalo2);
    }
},2000);

/** 3. Set Time out
 *  SetTimeout es una función que se utiliza para ejecutar una función después de un cierto tiempo.
 *  El tiempo se especifica en milisegundos. 
 *  La función setTimeout() ejecuta la función una sola vez, no como setInterval() que se ejecuta continuamente.
 *  hasta que se llama a clearInterval().
 */

// Ejemplo
setTimeout(function(){
    console.log('Hola soy un estudiante de Software');
},8000);

// Ejemplo 2
setTimeout(function(){
    console.log('Hola soy un estudiante de Ingeniería');
},5000);