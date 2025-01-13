class Inventario {
    #productos; // Propiedad privada

    constructor() {
        this.#productos = [//creamos un array de productos
            { nombre: "Laptop", precio: 1000, cantidad: 10, categoria: "Electronica" },
            { nombre: 'Teclados', precio: 100, cantidad: 10, categoria: 'Perifericos' },
            { nombre: 'Telefonos', precio: 200, cantidad: 5, categoria: 'Electronica' },
            { nombre: 'Pantallas', precio: 300, cantidad: 3, categoria: 'Perifericos' },
            { nombre: 'Computadoras', precio: 400, cantidad: 4, categoria: 'Electronica' },
        ];
    }

    //metodo para agregar productos
    agregarProducto(nombre, precio, cantidad, categoria) {
        if (precio < 0 || cantidad < 0) {//verificamos que el precio y la cantidad no sean negativos
            console.log("Error: Precio o cantidad no pueden ser negativos.");
            return;
        }
        this.#productos.push({ nombre, precio, cantidad, categoria });
    }

    //metodo para obtener productos
    get productos() {
        return [...this.#productos];//devolvemos una copia para proteger los datos originales
    }

    listarProductos(orden = "asc") {//ordenamos los productos por precio de forma ascendente o descendente
        return this.#productos.sort((a, b) => orden === "asc" ? a.precio - b.precio : b.precio - a.precio);//asc ordena de forma ascendente y desc de forma descendente, en este caso solo use de forma ascendente
    }

    filtrarPorCategoria(categoria) {
        return this.#productos.filter(producto => producto.categoria === categoria);//filter devuelve un nuevo array con los elementos que cumplan la condicion
    }

    mostrarInventario() {
        console.table(this.#productos);//mostramos el inventario incial en formato de tabla con la funcion .table()
    }
}


class Venta {
    constructor(inventario) {
        this.ventas = [];
        this.inventario = inventario;
    }

    realizarVenta(nombreProducto, cantidad) {
        let producto = null;
        for (let i = 0; i < this.inventario.productos.length; i++) {//recorremos el inventario de productos para encontrar el producto a vender
            if (this.inventario.productos[i].nombre === nombreProducto) {//verificamos si el nombre del producto es igual al nombre ingresado
                producto = this.inventario.productos[i];//asignamos el producto a la variable producto
                break;
            }
        }
    
        if (!producto){
            console.error("El producto no se encuentra en el inventario.");
            return;
        }
    
        if (producto.cantidad < cantidad){
            console.error("Stock agotado del producto seleccionado.");
            return;
        }
    
        producto.cantidad -= cantidad;//restamos la cantidad vendida al stock del producto
        const venta = {//creamos un objeto venta con los datos de la venta
            nombre: nombreProducto,
            cantidad,
            precioTotal: producto.precio * cantidad,
            fecha: new Date()//agregamos la fecha actual
        };
    
        this.ventas.push(venta);//agregamos la venta al array de ventas con la funcion push()
        console.log("Venta realizada:");
        console.table(venta);//mostramos la venta realizada en formato de tabla con la funcion .table()
    }
    

    aplicarDescuento(categoria, porcentaje){
        for (const producto of this.inventario.productos) {//recorremos el inventario de productos para aplicar el descuento
            if (producto.categoria === categoria) { //verifica si la categoria del producto es igual a la categoria ingresada
                producto.precio -= (producto.precio * (porcentaje / 100));
            }
        }
    }
    
}

class Reporte extends Venta { //heredamos de la clase Venta a Reporte
    constructor(inventario) {
        super(inventario);
    }
    generarReporteVentas() {
            const totalIngresos = this.ventas.reduce((total, venta) => total + venta.precioTotal, 0);
            const productoMasVendido = this.ventas.reduce((max, venta) => //reduce() recorre el array y va acumulando los valores en una variable (max) de las ventas realizadas
                (!max || venta.cantidad > max.cantidad) ? venta : max, null); // si la cantidad de la venta actual es mayor a la cantidad de la venta anterior, se asigna la venta actual a la variable max sino se asigna la venta anterior el null es el valor inicial de la variable max 
    
            console.log("=== Reporte de Ventas ===");
            console.log("Inventario actualizado (Incluye descuentos y productos vendidos):");
            console.table(this.inventario.productos); //la funcion console.table() muestra los datos en forma de tabla
            console.log("Ventas realizadas:");
            console.table(this.ventas);//mostramos las ventas realizadas en formato de tabla con la funcion nuevamente con .table()
            console.log(`Total de ingresos generados: ${totalIngresos}`);
            if (productoMasVendido) { //verificamos si hay ventas realizadas
                console.log(`Producto más vendido: ${productoMasVendido.nombre} (Cantidad: ${productoMasVendido.cantidad})`);
            } else {
                console.log("No se han realizado ventas.");
            }
    }
}


const inventario = new Inventario();
const gestionVentas = new Reporte(inventario);
inventario.mostrarInventario();//mostramos el inventario actual
inventario.agregarProducto("Mouse", 20, 10, "Perifericos");//agregamos un producto
inventario.agregarProducto("Maquillaje", -20, 10, "Belleza");//agregamos un producto negativo para verificar la validacion en la ejecucion

gestionVentas.realizarVenta("Telefonos",5);
gestionVentas.realizarVenta("Telefonos",4);//realizamos una venta de telefonos con cantidad mayor a la que hay en stock para verficar la validacion en la ejecucion
gestionVentas.aplicarDescuento("Perifericos", 20);
gestionVentas.realizarVenta("Mouse",2);
gestionVentas.aplicarDescuento("Electronica", 15);
gestionVentas.generarReporteVentas();//generamos el reporte de ventas con los cambios realizados en el inventario 

