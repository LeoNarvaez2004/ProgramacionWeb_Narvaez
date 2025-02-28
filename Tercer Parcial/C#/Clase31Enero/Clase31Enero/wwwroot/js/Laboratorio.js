//Laboratorio/ListarLaboratorios
window.onload = function () {
    listarLaboratorio();
}

async function listarLaboratorio() {
    pintar({
        url: "Laboratorio/ListarLaboratorios",
        cabeceras: ["ID Laboratorio", "Nombre", "Direccion", "Contacto","Numero contacto"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "contacto","numcontacto"],
        divContenedor: "divContenedor",
        editar: true,
        eliminar: true,
        propiedadId: "idLaboratorio"

    });
}

async function filtrarLaboratorio() {
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let persona = document.getElementById("persona").value;

    pintar({
        url: "Laboratorio/FiltrarLaboratorio?nombre=" + nombre + "&direccion=" + direccion + "&persona=" + persona,
        cabeceras: ["ID Laboratorio", "Nombre", "Direccion", "Contacto", "Numero contacto"],
        propiedades: ["idLaboratorio", "nombre", "direccion", "contacto", "numcontacto"],
    });
}

function buscarLab() {
    let forma = document.getElementById("frmBusqueda");
    let frm = new FormData(forma);

    fetchPost("Laboratorio/FiltrarLaboratorio", "json", frm, function (res) {
        document.getElementById("divContenedor").innerHTML = generarTabla(res);
    })
}

function Limpiar() {
    limpiarDatos("frmBusqueda"); // Limpia los campos del formulario
    listarLaboratorio(); // Vuelve a listar los laboratorios
}
function LimpiarLab() {
    limpiarDatos("frmIn"); // Limpia los campos del formulario
    listarLaboratorio(); // Vuelve a listar los laboratorios
}

function guardarLab() {
    let nombre = getN("nombre");
    let direccion = getN("direccion");
    let contacto = getN("contacto");
    let numcontacto = getN("numcontacto");

    if (!nombre.trim() || !direccion.trim() || !contacto.trim() || !numcontacto.trim()) {
        validacion(); 
        return;
    }
    let forma = document.getElementById("frmIn");
    let frm = new FormData(forma);

    fetchPost("Laboratorio/GuardarLaboratorio", "json", frm, function (res) {
        console.log("Respuesta del servidor:", res);

        if (res === 1) {  
            listarLaboratorio();
            LimpiarLab();
            const modal = document.getElementById('modalGuardarLaboratorio');
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
            exito();
        } else {  
            console.error("Error al guardar el laboratorio. Respuesta inesperada:", res);
            error();
        }
    });
}
function Editar(id) {
    fetchGet("Laboratorio/recuperarLaboratorio/?idLab=" + id, "json", function (data) {
            setN("idLaboratorio", data.idLaboratorio)
            setN("nombre", data.nombre)
            setN("direccion", data.direccion)
            setN("contacto", data.contacto)
            setN("numcontacto", data.numcontacto)
            let modal = new bootstrap.Modal(document.getElementById('modalGuardarLaboratorio'));
            modal.show();
    })
}
function Eliminar(id) {

    confirmacion("¿Está seguro?","Esta acción no se puede deshacer.", 
        function () {
            fetchGet("Laboratorio/eliminarLab/?idLab=" + id, "text", function (data) {
                listarLaboratorio(); 
                exito("Laboratorio eliminado correctamente."); 
            });
        }
    );
}