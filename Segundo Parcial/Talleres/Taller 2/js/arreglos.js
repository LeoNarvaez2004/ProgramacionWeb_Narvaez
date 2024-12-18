//Arreglos

const arr=new Array(10);
const arr1=[];
console.log(arr1);

const numeros=[1,2,3,4,5];
let colores=["rojo","verde","azul"];

//ejericio
let videojuegos=["Mario","Megaman","Soccer"];
console.log(videojuegos[2]);

let arregloCosas=[
    true,
    123,
    'Fernando',
    1+2,
    function(){},
    ()=>{},
    ['S','Peliculas']
];
console.log({arregloCosas});
console.log(arregloCosas[4]);

//metodos

//map, filter, reduce()
/*
    map() Transgorma los elementos de un arreglo
*/ 

let numerosMap=[1,2,3,4,5,6];
let cuadrados = numerosMap.map(num=>num*num);
console.log(cuadrados);

let numerosFilter=[1,2,3,4,5,6];
let pares=numerosFilter.filter(num=>num%2==0);
console.log(pares);

let numerosReduce=[1,2,3,4,5,6,7,9,10]
let maximo=numerosReduce.reduce((acumular,num)=>(num>acumular?num:acumular),numerosReduce[0]);
console.log(maximo);

/*                                                      Ventajas
    Son ideales para trabajar con transformaciones y manipulaciones complejas de datos dentro de un array
    Permiten un estilo de programacion funcional mas limpio y facil de leer
*/ 