//Laboratorio/ListarLaboratorios
window.onload = function () {
    listarLaboratorio();
}

async function listarLaboratorio() {
    pintar({
        url: "Laboratorio/ListarLaboratorios",
        cabeceras: ["ID Laboratorio", "Nombre", "Direccion", "Contacto"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "contacto"],
        divContenedor: "divContenedor",
        editar: true,
        eliminar: true

    });
}

async function filtrarLaboratorio() {
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let persona = document.getElementById("persona").value;

    pintar({
        url: "Laboratorio/FiltrarLaboratorio?nombre=" + nombre + "&direccion=" + direccion + "&persona=" + persona,
        cabeceras: ["ID Laboratorio", "Nombre", "Direccion", "Contacto"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "contacto"],
    });
}

function buscarLab() {
    let forma = document.getElementById("frmBusqueda");
    let frm = new FormData(forma);

    fetchPost("Laboratorio/FiltrarLaboratorio", "json", frm, function (res) {
        document.getElementById("divContenedor").innerHTML = generarTabla(res);
    })
}

async function Limpiar() {

    document.getElementById("nombre").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("persona").value = "";

    pintar({
        url: "Laboratorio/FiltrarLaboratorio?nombre=" + "&direccion=" + "&persona=",
        cabeceras: ["ID Laboratorio", "Nombre", "Direccion", "Contacto"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "contacto"]
    });
}

function LimpiarLab() {
    limpiarDatos("frmBusqueda"); // Limpia los campos del formulario
    listarLaboratorio(); // Vuelve a listar los laboratorios
}