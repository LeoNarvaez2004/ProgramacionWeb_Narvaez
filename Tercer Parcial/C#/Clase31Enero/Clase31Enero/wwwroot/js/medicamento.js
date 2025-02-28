window.onload = function () {
    listarMedicamento();
}

async function listarMedicamento() {
    objMedicamento = {
        url: "Medicamento/ListarMedicamentos",
        cabeceras: ["ID Medicamento", "Nombre", "Nombre Laboratorio","Nombre Tipo Medicamento"],
        propiedades: ["idMedicamento", "nombre", "nombreLaboratorio","nombreTipoMedicamento"],
        editar: true,
        eliminar: true,
        propiedadId: "idMedicamento"
    };
    pintar(objMedicamento);
}
async function listarGuardar() {
    objMedicamento = {
        url: "Medicamento/ListarGuardar",
        cabeceras: ["ID Medicamento", "Codigo", "Nombre Medicamento", "ID Laboratorio", "ID Tipo Medicamento","Uso","Contenido"],
        propiedades: ["idMedicamento", "codigo", "nombre", "idLab","idTipoMed","uso","contenido"],
        editar: true,
        eliminar: true,
        propiedadId: "idMedicamento"
    };
    pintar(objMedicamento);
}
function buscarMed() {
    let forma = document.getElementById("frmBusqueda");
    let frm = new FormData(forma);

    fetchPost("Medicamento/filtrarMedicamento", "json", frm, function (res) {
        document.getElementById("divContenedor").innerHTML = generarTabla(res);
    })
}
function LimpiarIn() {
    limpiarDatos("frmIn"); // Limpia los campos del formulario
    listarMedicamento(); // Vuelve a listar los laboratorios
}
function LimpiarUp() {
    limpiarDatos("frmIn"); // Limpia los campos del formulario
    listarGuardar(); // Vuelve a listar los laboratorios
}
function guardarMed() {
    let codigo = getN("codigo");
    let nombre = getN("nombre");
    let idLab = getN("idLab");
    let idTipoMed = getN("idTipoMed");
    let uso = getN("uso");
    let contenido = getN("contenido");
    if (!codigo.trim() || !nombre.trim() || !idLab.trim() || !idTipoMed.trim() || !uso.trim() || !contenido.trim()) {
        validacion();
        return;
    }
    let forma = document.getElementById("frmIn");
    let frm = new FormData(forma);
    console.log("Datos enviados:", Object.fromEntries(frm));
    fetchPost("Medicamento/GuardarMedicamento", "json", frm, function (res) {
        if (res === 1) {
            listarGuardar();
            LimpiarUp();
            const modal = document.getElementById('modalGuardarMedicamento');
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
            exito();
        } else {
            alert("Error al guardar el medicamento. Respuesta inesperada:"+ res);
        }
    })
}
function Editar(id) {
    fetchGet("medicamento/recuperarMedicamento/?idMed=" + id, "json", function (data) {
        setN("idMedicamento", data.idMedicamento)
        setN("codigo", data.codigo)
        setN("nombre", data.nombre)
        setN("idLab", data.idLab)
        setN("idTipoMed", data.idTipoMed)
        setN("uso", data.uso)
        setN("contenido", data.contenido)
        let modal = new bootstrap.Modal(document.getElementById('modalGuardarMedicamento'));
        modal.show();

    })
}

function Eliminar(id) {

    confirmacion("¿Está seguro?", "Esta acción no se puede deshacer.",
        function () {
            fetchGet("medicamento/eliminarMedicamento/?idMed=" + id, "text", function (data) {
                listarGuardar();
                exito("Medicamento eliminado correctamente.");
            });
        }
    );
}