window.onload = function () {
    listarSucursal();
}
async function listarSucursal() {

    pintar({
        url: "sucursal/listarSucursal",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["idSucursal", "nombre", "direccion"],
        divContenedor: "divContenedor",
        editar: true,
        eliminar: true
    });
}

function buscarSuc() {
    let hola = '0';
    let forma = document.getElementById("frmBusqueda");
    let frm = new FormData(forma);

    fetchPost("Sucursal/FiltrarSucursal", "json", frm, function (res) {
        document.getElementById("divContenedor").innerHTML = generarTabla(res);
    })
}

async function filtrarSucursal() {
    let id = document.getElementById("idSucur").value;
    let idn = document.getElementById("idSucurd").value;
    pintar({
        url: "Sucursal/FiltrarSucursal?id=" + id + "&idn=" + idn,
        cabeceras: ["ID Sucursal", "Nombre", "Descripcion"],
        propiedades: ["idSucursal", "nombre", "direccion"],
        editar: true,
        eliminar: true
    });
}
async function Limpiar() {

    document.getElementById("idSucur").value = "";

    pintar({
        url: "sucursal/FiltrarSucursal/?nombre=",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["idSucursal", "nombre", "direccion"],
        editar: true,
        eliminar: true
    });
}
function LimpiarSuc() {
    limpiarDatos("frmBusqueda"); // Limpia los campos del formulario
    listarSucursal(); // Vuelve a listar los laboratorios
}
function guardarSuc() {
    let forma = document.getElementById("frmIn");
    let frm = new FormData(forma);

    fetchPost("Sucursal/GuardarSucursal", "json", frm, function (res) {
        LimpiarIn();
    })
}
function LimpiarIn() {
    limpiarDatos("frmIn"); // Limpia los campos del formulario
    listarSucursal(); // Vuelve a listar los laboratorios
}