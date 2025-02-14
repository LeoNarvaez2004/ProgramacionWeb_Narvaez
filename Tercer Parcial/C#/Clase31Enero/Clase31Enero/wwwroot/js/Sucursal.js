window.onload = function () {
    listarSucursal();
}
async function listarSucursal() {

    pintar({
        url: "sucursal/listarSucursal",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["idSucursal", "nombre", "direccion"]
    });
}

async function recuSucursal() {
    let id = document.getElementById("idSucur").value;
    pintar({
        url: "Sucursal/FiltrarSucursal?id=" + id,
        cabeceras: ["ID Sucursal", "Nombre", "Descripcion"],
        propiedades: ["idSucursal", "nombre", "direccion"]
    });
}
async function Limpiar() {

    document.getElementById("idSucur").value = "";

    pintar({
        url: "sucursal/FiltrarSucursal/?nombre=",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["idSucursal", "nombre", "direccion"]
    });
}