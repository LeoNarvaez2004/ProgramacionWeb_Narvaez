function calcularPromedio(a,b,c){
    if (typeof a!=='number' || typeof b!=='number' || typeof c!=='number'){
        return 'Error';
    }
    if(a<0 || b<0 || c<0){
        return 'Error';
    }
    return (a+b+c)/3;
}

let determinarMayor = function(a,b){
    if(typeof a!=='number' || typeof b!=='number'){
        return 'Error';
    }
    return a>b ? a:b;
};

const esPar = (a) => {if(typeof a!== 'number'){
        return 'Error';
    }
    return (a%2==0) ? 'True':'False'
};

(function (){
    let promedio = calcularPromedio(3,'d',3);
    console.log(promedio);
    let promedio1 = calcularPromedio(3,30,3);
    console.log('El promedio es',promedio1);
    let resultado = determinarMayor(5,4);
    console.log('El',resultado,'es mayor.');
    let resultado2 = determinarMayor('c',4);
    console.log(resultado2);
    console.log(esPar(30));
}());