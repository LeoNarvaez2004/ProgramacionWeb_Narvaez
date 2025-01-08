const inventario={
    Producto1: {nombre:'Teclados', precio: 100, cantidad:10},
    Producto2: {nombre:'Telefonos', precio: 200, cantidad:5},
    Producto3: {nombre:'Pantallas', precio: 300, cantidad:3},
    Producto4: {nombre:'Computadoras', precio: 400, cantidad:4},
}

Object.seal(inventario);

function venderProducto(nombre, cantidad){
    let producto = null;
    for(const key in inventario){
        if(inventario[key].nombre === nombre){
            producto=inventario[key];
            break;
        }
    }

    if(!producto){
        console.log(`El producto no existe en nuestro inventario.`);
        return;
    }

    if(producto.cantidad < cantidad || producto.cantidad === 0){
        console.log(`No hay suficiente cantidad de ${producto.nombre} en el inventario.\n`);
        return;
    }else{
        producto.cantidad -= cantidad;
        console.log(`Venta realizada de ${producto.nombre}, cantidad restante: ${producto.cantidad}`);
    }
}

function descuento(porciento){
    for(const key in inventario){
        const producto = inventario[key];
        const conDescuento = producto.precio - (producto.precio * porciento/100);
        if(conDescuento < 0){ 
            console.log('Error\n');
            return; 
        }
        producto.precio = conDescuento; 
    }
    console.log(`Descuento aplicado del ${porciento}%`);
}

function mostrarInventario(){
    for(const key in inventario){
        const producto=inventario[key];
        console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
    }
    console.log('\n')
}

console.log('\nInventario:' );
mostrarInventario();
venderProducto('Teclados', 5);
venderProducto('Telefonos', 3);
venderProducto('Teclados', 6);
venderProducto('Lavadoras', 2);
descuento(10);
console.log('\nInventario actualizado:');
mostrarInventario();