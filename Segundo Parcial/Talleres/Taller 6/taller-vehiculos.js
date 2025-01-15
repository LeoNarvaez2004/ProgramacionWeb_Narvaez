class Conductor {
    #licencia; 

    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.#licencia = licencia;
        this.rutas = []; 
    }

    getLicencia() {
        return this.#licencia;
    }

    registrarRuta(ruta) {
        this.rutas.push(ruta);
        console.log(`Ruta '${ruta.nombre}' registrada para el conductor ${this.nombre}.`);
    }
}

class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
        super(nombre, licencia);
        this.vehiculoFav = null;
    }

    asignarVehiculoFav(vehiculo) {
        this.vehiculoFav = vehiculo;
        console.log(`Vehículo favorito ${vehiculo.modelo} asignado a ${this.nombre}.`);
    }
}

class Ruta {
    constructor(nombre, inicio, fin) {
        this.nombre = nombre; 
        this.inicio = inicio; 
        this.fin = fin;       
    }

    obtenerDetalles() {
        return `Ruta: ${this.nombre}, Inicio: ${this.inicio}, Fin: ${this.fin}`;
    }
}

class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.asignado = null;
    }

    asignarConductor(conductor) {
        this.asignado = conductor;
        console.log(`Vehículo ${this.modelo} con placa ${this.placa} asignado a ${conductor.nombre}.`);
    }
}

const conductorVIP = new ConductorVIP("Luis Gómez", "VIP12345");
const ruta1 = new Ruta("Ruta 1", "Quito", "Guayaquil");

conductorVIP.registrarRuta(ruta1);
ruta1.obtenerDetalles();

const vehiculo1 = new Vehiculo("BMW Serie 5", "VIP-001");
conductorVIP.asignarVehiculoFav(vehiculo1);

