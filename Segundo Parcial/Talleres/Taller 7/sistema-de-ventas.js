//Sistema de ventas

class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio, categoria, stock){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._categoria = categoria;
        if(precio <= 0){
            console.log('El precio debe ser mayor a 0');
        }else{
            this._precio = precio;
        }
        if(stock <= 0){
            console.log('El stock debe ser mayor a 0');
        }else{
            this._stock = stock;
        }
    }

    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set precio(precio){
        this._precio = precio;
    }
    set idProducto(idProducto){
        this._idProducto = idProducto;
    }
    set categoria(categoria){
        this._categoria = categoria;
    }
    get categoria(){
        return this._categoria;
    }
    set stock(stock){
        this._stock = stock;
    }
    get stock(){
        return this._stock;
    }
    toString(){
            return (`\nidProducto: ${this._idProducto} \nnombre: ${this._nombre} \nprecio: ${this._precio} \ncategoria: ${this._categoria} \nstock: ${this._stock}\n`);
    }

}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }
    
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            if(producto.stock>0){
                this._productos.push(producto);
                producto.stock--;
            }else{
            console.log('No hay stock del producto: ' + producto.nombre);
            }
        }else{
            console.log('No se pueden agregar más productos');
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(const producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        this.ordenarProductosDescendente();
        let productosOrden='';
        for(const producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        const total=this.calcularTotal();
        const descuenta=this.categoriaDescuento();
        const totalIva=this.precioMasIva();
        console.log(`\nOrden: ${this._idOrden} 
            \nProductos: ${productosOrden}
            \nTotal sin IVA: $${total- descuenta} 
            \nTotal mas IVa: $${totalIva- descuenta}
            \nDescuento: $${descuenta}
            `);
    }
    categoriaDescuento(){
        let descuento = 0;
        for(const producto of this._productos){
            if(producto.categoria === 'Accesorios'){
                descuento += producto.precio*0.10;
            }else{
                console.log('No hay descuento en productos de la categoría: ',producto.categoria);
            }
        }
        return descuento;
    }

    precioMasIva(){
        let total = this.calcularTotal();
        let iva = total*0.16;
        return total + iva;
    }
    ordenarProductosDescendente(){
        this._productos.sort((a,b) => b.precio - a.precio);
        console.log('Productos ordenados de forma descendente');
    }
}

// Creación de productos con categoría y stock
let producto1 = new Producto('Laptop', -500, 'Electrónica', -10);
let producto2 = new Producto('Mouse', 10, 'Accesorios', 50);
let producto3 = new Producto('Teclado', 20, 'Accesorios', 30);
let producto4 = new Producto('Monitor', 1000, 'Electrónica', 20);

// Creación de órdenes y agregar productos
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto1);
orden2.mostrarOrden();

/*
Static se utiliza para acceder directamente a traves de la clase.
Los metodos estaticos no requieren que se creen una instancia de la clase para ser utilizados.

class Calculadora {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Calculadora.sumar(3, 4)); El acceso al metodo estatico ditecamente a traves de la clase 

No se puede acceder a un metodo estatico a traves de una instancia de la clase
const calculadora = new Calculadora();
console.log(calculadora.sumar(3, 4)); Error

El modificador static en JS es una herramienta clave para definir metodos y propiedades que pertenecen a la clase en si 
misma y no a las instancias de la clase. */

