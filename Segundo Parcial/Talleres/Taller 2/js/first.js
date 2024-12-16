var nombre="Leonardo";
var edad;
edad=25;
var apellido="Narvaez";
console.log("Edad: " +edad);
console.log("Mi nombre es " +nombre+ " " +apellido+ " y tengo "+edad+" anios");

/*
Ejemplos de los tipos de datos JavaScript
*/

//tipo de datos string
//var==>underprecated
//let==>moderno
//const==>moderno

let nombrePersona="Kateryn";
console.log(nombrePersona);

//Tipo de datos numericos

let numero=1000;
console.log(numero);

//Tipo de datos objetos
let persona ={
    nombre:"Leonardo",
    apellido:"Narvaez",
    edad:25
}

console.log(persona);

//tipo de dato typeof
let let1='Ricardo';
console.log(typeof let1); //string
let let2=25;
console.log(typeof let2); //number
let let3=false;
console.log(typeof let3); //boolean
let let4=BigInt(123);
console.log(typeof let4); //bigint
let let5=[1,2,3,4,5,6,7,8,9,10];
console.log(typeof let5); //object


//tipo de dato tipo funcion

function saludar(){
    console.log(typeof saludar);
}

//Tipo de dato symbol

let simbolo=Symbol("Mi simbolo");
console.log(typeof simbolo);

//tipo de dato tipo clase, que es lo mismo que una funcion

class Persona{
    constructor(nombres, apellidos, edad){//Atributos, COnstructor
        this.nombres=nombres;//propiedades: atributos
        this.apellidos=apellidos;
        this.edad=edad;
    }
}

console.log(typeof Persona);

//tipo de datos undefned se puede utilizar como un valor 
let variable;
console.log(variable);
console.log(typeof variable);

//tipo de datos son los generados por cadenas vacias

let cadenaVacia="";
console.log(cadenaVacia);
console.log(typeof cadenaVacia);

let numero1=10;
let numero2=5;
console.log(numero1+numero2);
console.log(numero1-numero2);
console.log(numero1*numero2);
console.log(numero1/numero2);
console.log(numero1**numero2);

let numero3=3,numero4=2;
let numero5=numero3+numero4;
numero5=++numero3;
console.log(numero3);
console.log(numero5);

numero5=numero4++;
console.log(numero4);
console.log(numero5);

numero5=--numero3;
console.log(numero3);
console.log(numero5);

numero5=numero4--;
console.log(numero4);
console.log(numero5);

let pre1=2,pre2=3,pre3=4,pre4=5;

let pre=(pre1+pre2)*pre3;
console.log(pre);

let pre5=pre1+pre2*pre3;
console.log(pre5);

let pre6=(pre1*pre3)+pre2*pre4/(pre1+pre2);
console.log(pre6);

let operador1=3, operador2=2;

operador1+=operador2;
console.log(operador1);
operador1-=operador2;
console.log(operador1);

let operador3=3, operador4="3";

let operador10=operador3==operador4;
console.log(operador10);

let operador11=operador3===operador4;
console.log(operador11);

if(operador3==operador4){
    console.log("Son iguales");
}else{
    console.log("Son difetentes");
}

let number=10;
if(number%2==0){
    console.log("Par");
}else{
    console.log("Impar");
}

let edadP=18;
if(edadP>=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

let j=0,k=0;
for(let i=0;i<let5.length;i++){
    if(let5[i] % 2 == 0){
        j++;
    }else{
        k++;
    }
}
console.log("Hay "+j+" numero pares");
console.log("Hay "+k+" numero impares");

let s=8;

let valMin=9, valoMax=7;

if(s>=valMin && s<=valoMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("El valor no esta dentro del rango");
}

if(s>=valMin || s<=valoMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("El valor no esta dentro del rango");
}

let resultado=(s>=valMin&&s<valoMax)?"\nEl valor esta dentro del rango":"\nEl valor no esta dentro del rango"
console.log(resultado);

//CONVERSION DE TIPOS

let newNumber="20";
console.log(typeof newNumber);

let  converseNewNumber=Number(newNumber);
console.log(typeof converseNewNumber);
console.log(converseNewNumber);

let convertNewNumber=parseInt(newNumber);
console.log(typeof convertNewNumber);
console.log(convertNewNumber);

console.log(parseInt("42px"));
console.log(parseInt("3.1416"));
console.log(parseInt("abc"));

console.log(Number("42px"));
console.log(Number(3.1416));
console.log(Number("abc"));

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

if(isNaN(convertNewNumber)){
    console.log("No es un numero");
}else{
    console.log("Es un numero");
}