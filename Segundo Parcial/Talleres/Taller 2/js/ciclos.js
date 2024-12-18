//Ciclos

//Cilo for 
const heroes=["Batman","Superman","Wonder Woman","Aquaman"];

console.warn("For tradicional");
for(let i=0;i<heroes.length;i++){
    console.warn(heroes[i]);
}

console.warn("For In");
for (let i in heroes) {
    console.warn(heroes[i]);
}

console.warn("\nFor Of");
for(let heroe of heroes){
    console.warn(heroes);
}

/*uso de la declaracion for
    Se usa for tradicional cuando necesitamos el control total de los indices del array
  For in
    Se usa para el manejo de los objetos, es decir para iterar un objeto por los indices del array
  For of
    Se usa para iterar los valores directamente de un iterable (array, cadenas de texto, map, set, nodelist)
*/

//CONTINUE Y EL BREAK DENTRO DE UN CICLO FOR

for(let contador=0; contador<10;contador++){
    if(contador%2!==0){
        continue;
    }
    console.log(contador);
}

const carros=['Ford','Mazda','Honda','Toyota'];
for(let contador=0; contador<carros.length;contador++){
    if(contador==1){
        continue;
    }
    console.log(carros[contador]);
}

//While

console.log("Ciclo While");
let i=0;

while(carros[i]){
    if(i==1){
        i++;
        break;
    }
    console.warn(carros[i]);
    i++
}

