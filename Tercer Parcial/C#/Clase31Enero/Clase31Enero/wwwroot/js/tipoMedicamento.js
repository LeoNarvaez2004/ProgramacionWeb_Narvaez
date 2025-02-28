window.onload = function ()
{
    listarTipoMedicamento();
}

let objTipoMedicamento;
/*
function fitrarTipoMedicamento() {
    let nombre = document.getElementById("nombreTipoMed").value;
    if (nombre === "") {
        listarTipoMedicamento();
    } else {
        objTipoMedicamento.url = "TipoMedicamento/FiltrarTipoMedicamento?nombre=" + nombre;
        pintar(objTipoMedicamento);
    }
}
async function eliminarMed() {
    let id = document.getElementById("idEli").value;
    fetchGet("TipoMedicamento/eliminarMed/?id=" + id, "none", function (res) { });
    alert(id);
}
*/
async function listarTipoMedicamento() {
    objTipoMedicamento = {
        url: "TipoMedicamento/listarMedicamento",
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"],
        editar: true,
        eliminar: true,
        propiedadId: "idTipoMedicamento"
    };
    pintar(objTipoMedicamento);
}

    
/*
async function filtrarMedicamento() {
    let id = document.getElementById("idMed").value;
    let nombre = document.getElementById("nombre").value;
    let idLab = document.getElementById("idLab").value;
    let idTip = document.getElementById("idTip").value;

    pintar({
        url: "TipoMedicamento/filtrarMedicamento/?idMed=" + id + "&nombre=" + encodeURIComponent(nombre) + "&idLab=" + idLab + "&idTip=" + idTip,
        cabeceras: ["ID Tipo Medicamento", "Nombre", "ID Laboratorio", "ID Tipo Medicamento"],
        propiedades: ["idMedicamento", "nombre", "idLaboratorio", "idTipoMedicamento"]
    });
}*/


async function filtraTipoMed() {
    let nombre = document.getElementById("nombreTipoMed").value;
    objTipoMedicamento= {
        url: "TipoMedicamento/FiltrarTipoMedicamento?nombre=" + encodeURIComponent(nombre),
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"],
        editar: true,
        eliminar: true,
        propiedadId: "idTipoMedicamento"
    };
    pintar(objTipoMedicamento);
}
function guardarTipoMed() {
    let nombre = getN("nombre");
    let descripcion = getN("descripcion");
    if (!nombre.trim() || !descripcion.trim()) {
        validacion();
        return;
    }
    let forma = document.getElementById("frmIn");
    let frm = new FormData(forma);

    fetchPost("tipoMedicamento/GuardarTipoMedicamento", "json", frm, function (res) {
        if (res === 1) {
            listarTipoMedicamento();
            LimpiarIn();
            const modal = document.getElementById('modalGuardarTipoMedicamento');
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
            exito();
        } else {
            console.error("Error al guardar el tipo medicamento. Respuesta inesperada:", res);
            error();
        }
    })

}
async function Limpiar() {

    document.getElementById("nombreTipoMed").value = "";

    pintar({
        url: "TipoMedicamento/FiltrarTipoMedicamento/?nombre=",
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"]
    });
}
function LimpiarIn() {
    limpiarDatos("frmIn"); 
    listarTipoMedicamento(); 
}

function Editar(id) {
    fetchGet("TipoMedicamento/recuperarTipoMedicamento/?idTM=" + id, "json", function (data) {
        setN("idTipoMedicamento", data.idTipoMedicamento)
        setN("nombre", data.nombre)
        setN("descripcion", data.descripcion)
        let modal = new bootstrap.Modal(document.getElementById('modalGuardarTipoMedicamento'));
        modal.show();
    })
}
function Eliminar(id) {

    confirmacion("¿Está seguro?", "Esta acción no se puede deshacer.",
        function () {
            fetchGet("TipoMedicamento/eliminarTipoMedicamento/?idTM=" + id, "text", function (data) {
                listarTipoMedicamento(); 
                exito("Laboratorio eliminado correctamente.");
            });
        }
    );
}