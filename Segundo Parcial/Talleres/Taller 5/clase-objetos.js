/** Objetos */

/**
 * Caracteristicas principales de los objetos en JS
 * Claves y valores:
 * 
 * Las claves  son cadenas de o simbolos (unicos).
 * los valores pueden ser cualquier tipo: numeros, cadenas funciones, otros tipos de objetos, etc.
 */

/** Dinamismo:
 * Los objetos pueden modificarse en tiempo de ejecucion (agregar, modificar, o eliminar propiedades de un objeto).
 */

/**Nota especial:
 * Dentro de los objetos se pueden incluir metodos.
 * Los metodos son funciones asociados a un objeto.
 */

/**Los objetos ==> contienen propiedades y metodos */

let persona = {
    nombres: 'Juan',
    apellido: 'Perez',
    email:'jperez@gmail.com',
    edad:20
};

console.log(persona);

let people={
    name:'Andy',
    lastName:'Cooks',
    age:30,
    fullName: function (){
        return (this.name +' '+ this.lastName);
    }
};

console.log(people.fullName());

const people1={
    name:'Mary',
    lastname:'Dalas',
    age:22,
    greet:function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
console.log(people1.name);
people1.greet();

/**Usando constructor object 
 * Es otra forma de crear un objeto vacioo y agregarle propiedades posteriormente.
*/

const people2=new Object();
people2.name='Sam';
people2.lastname='Lincoln';
people2.greet=function(){
    console.log(`Hello my name is ${this.name}`);
}

console.log(people2.name);
people2.greet();

//**Usando la clase Object.create()
// Nos permite crear un objeto basado en un prototipo

const prototypePerson={
    greet:function(){
        console.log(`Hi from prototype, I'm ${this.name}`);
    }
}

const people3=Object.create(prototypePerson);
people3.name='Carl';
people3.greet();

/**Usando clases (introducido desde ES6 hasta la actualidad) 
 * Proporciona una sintaxis mas estructurada para crear objetos.
*/

class Person {
    constructor(name, lastname) {
        this.name=name;
        this.lastname=lastname;
    }
    greet(){
        console.log(`Hi from classes, I'm ${this.name}`);
    }
}

const people4=new Person ('Ana','Rios');
people4.greet(); 

/**Usando funciones constructores
 * forma clasica, no tan frecuentemente usada.
 */
function Person1(name, age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`Hi from functions, I'm ${this.name} and I'm ${this.age} years old`);
    }
}

const people5=new Person1('Leo',20);
people5.greet();

const people6={name:'Peter'};
people6.age=23;
people6.name='Peter Parker';
console.log(people6);

/**Para eliminar atributos de un objeto usamos delete */
//delete people6.age;
console.log(people6);

for(nameProperty in people6){
    console.log(nameProperty);
    console.log(people6[nameProperty]);
}

for(let key in people6){
    console.log(`${key}:${people6[key]}`);
}

//Verificar propiedades/atributos
console.log('name' in people6);
console.log(people6.hasOwnProperty('age'));

/**Metodos utiles para trabajar con objetos
 * 1. Objetct.keys()
 * Devolver un array con las claves del objeto
 */

console.log(Object.keys(people6));

/**2. Object.values() 
 * Devuelven un array con los valores del objeto
*/
console.log(Object.values(people6));

/**3. Object.entries()
 * Devuelve un array de pares[claves , valores]
 */

console.log(Object.entries(people6));

/**4. Objetc.asign()
 * copia los valora de un objeto a otro
 */

const copy = Object.assign({},people6);
console.log(copy);

/**5. Object.freeze() 
 * Congela un objeto para evitar modificaciones.
*/

Object.freeze(people6);

/**6. Object.seal()
 * Permite modificar propiedades existentes, pero no agregar o eliminar propiedades.
 */

Object.seal(people6);

/**Nota
 * impresion de valores de propiedades de un objeo
 */

let personArray=Object.values(people6);
console.log(personArray);

let personString = JSON.stringify(people6);
/**
 * JSON es una notacion, es un objeto
 * stringify es convertir a cadena o string cada propiedad.
 */
console.log(personString);

/**
 * Metodo GE en objetos JS
 * Metodos que se usan a manera de buenas practicas, que permiten acceder y modificar propiedades de un objeto.
 * Acceden a los valores de las propiedades de un objeto.
 */

let personaGET={
    nombre: 'Juan',
    apellido: 'Perez',
    email:'jperez',
    edad:20,
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaGET.nombreCompleto);

/**
 * Metodo SET en objetos JS
 * Permite modificar o establecer los valores de las propiedades de un objeto.
 */

/**
 * Validaciones
 */

let personaSet ={
    nombre: 'Juan',
    apellido: 'Perez',
    email:'jperez',
    edad:20,
    idioma:'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(personaSet.lang);

let personaSet1 ={
    nombre: 'Juan',
    apellido: 'Perez',
    email:'jperez',
    edad:20,
    idioma:'',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma=lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSet1.lang);
personaSet1.lang='en';
console.log(personaSet1.lang);

/**
 * Constructores en JS
 * 
 * Si se desea crear mas objetos del mismo tipo esto NO ES POSIBLE.
 * Para ello se usan los constructores.
 * 
 * Es una funcion que permite trabajar con objetos.
 */

//Funcion constructora de tipo persona

function PersonaFC(nombre, apellido, email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
}

let padreFC=new PersonaFC('Juan','Sanchez','jsanchez');// La variable ya no es variable, sino ahora es un metodo constructor.
console.log(padreFC);

let madreFC=new PersonaFC('Maria','Sanchez','msanchez');
console.log(madreFC);

padreFC.tel='123456789';
console.log(padreFC);
console.log(madreFC);

function PersonaFCM(nombre, apellido, email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.nombreCompleto=function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padreFCM=new PersonaFCM('Juan','Sanchez','jsanchez');
console.log(padreFCM.nombreCompleto());

let madreFCM=new PersonaFCM('Maria','Sanchez','msanchez');
console.log(madreFCM.nombreCompleto());
/**
 * Uso de prototype
 */
PersonaFCM.prototype.tel='123456789';
console.log(padreFCM.tel);

let personaCall1={
    nombre:'Diego',
    apellido:'Salas',
    nombreCompleto:function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let personaCall2={
    nombre:'Ana',
    apellido:'Rios'
}
console.log(personaCall1.nombreCompleto());
console.log(personaCall1.nombreCompleto.call(personaCall2));

//como pasar parametros a travez del metodo call
let personaCall3 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let personaCall4 = {
    nombre: "Carlos",
    apellido: "Lara"
}

console.log(personaCall3.nombreCompleto("Lic", "123456789"));
console.log(personaCall3.nombreCompleto.call(personaCall4, "Ing", "987654321"));

//Uso del metodo apply

let personaApply1 = {
    nombre: 'Diego',
    apellido: 'Salas',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
let personaApply2 = {
    nombre: 'Ana',
    apellido: 'Rios'
}

console.log(personaApply1.nombreCompleto());
console.log(personaApply1.nombreCompleto.apply(personaApply2));

let arreglo = ['Ing', '123456789'];
console.log(personaCall3.nombreCompleto.apply(personaApply2, arreglo));