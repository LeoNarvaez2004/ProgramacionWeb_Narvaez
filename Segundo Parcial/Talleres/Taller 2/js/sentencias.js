
//If else

let numero=2;

if(numero==1){
    console.log("Numero 1");
}else if (numero==2){
    console.warn("Numero 2");    
}else if(numero==3){
    console.warn("Numero 3");
}else{
    console.log("No es un numero");
}

//Ejercicio referente a las estaciones del año 
// Invierno, Otoño, Primavera, Verano

let mes =4;
let estacion;

if(mes==1||mes==2||mes==3){
    estacion="Invierno";
}else if(mes ==4||mes==5||mes==6){
    estacion="Otoño";
}else if(mes==7||mes==8||mes==9){
    estacion="Primavera";
}else if(mes==10||mes==11||mes==12){
    estacion="Verano";
}else{
    estacion="No corresponde a una estacion.";
}
console.log("\n"+estacion);
//Ejercicio: Calcular la hora del dia

/*
6am - 11am ==> Buenos dias
12am - 18pm ==> Buenas Tardes
19pm - 23pm ==> Buenas Noches
24am - 5am ==> Durmiendo
*/

let mensaje;

let hora = 13;

if(hora>=6&&hora<=11){
    mensaje="Buenos Dias";
}else if(hora >= 12 &&hora<=18){
    mensaje="Buenas Tardes";
}else if(hora>=19&&hora<=23){
    mensaje="Buenas Noches";
}else if(hora>=24||hora<=5){
    mensaje="Durmiendo";
}else{
    mensaje="Hora invalida";
}
console.log("\n"+mensaje);

//Switch

let mesE=1;
let estacionI="Estacion desconocida";

switch(mesE){
    case 1: case 2: case 3:
        estacionI="Invierno";
        break;
    case 4: case 5: case 6:
        estacionI="Otoño";
        break;
    case 7: case 8: case 9:
        estacionI="Primavera";
        break;
    case 10: case 11: case 12:
        estacionI="Verano";
        break;
    default:
        estacionI="Estacion no identificada.";
}
console.log("\n"+estacionI);

//Otra manera de usar If

if(hora>=6&&hora<=11)
    mensaje="Buenos Dias";
else if(hora >= 12 &&hora<=18)
    mensaje="Buenas Tardes";
else if(hora>=19&&hora<=23)
    mensaje="Buenas Noches";
else if(hora>=24||hora<=5)
    mensaje="Durmiendo";
else
    mensaje="Hora invalida";

console.warn("\n"+mensaje);