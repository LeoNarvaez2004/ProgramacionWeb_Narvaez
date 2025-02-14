window.onload = function ()
{
    listarTipoMedicamento();
}

async function eliminarMed() {
    let id = document.getElementById("idEli").value;
    fetchGet("TipoMedicamento/eliminarMed?id=" + id, "none", function (res) { });
    alert(id);
}

async function listarTipoMedicamento() {
    pintar({
        url: "TipoMedicamento/listarMedicamento",
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Descripcion","Stock"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion","stock"]
    });
}

async function filtrarMedicamento() {
    let id = document.getElementById("idMed").value;
    let nombre = document.getElementById("nombre").value;
    let idLab = document.getElementById("idLab").value;
    let idTip = document.getElementById("idTip").value;

    pintar({
        url: "TipoMedicamento/filtrarMedicamento?idMed=" + id + "&nombre=" + encodeURIComponent(nombre) + "&idLab=" + idLab + "&idTip=" + idTip,
        cabeceras: ["ID Tipo Medicamento", "Nombre", "ID Laboratorio", "ID Tipo Medicamento"],
        propiedades: ["idMedicamento", "nombre", "idLaboratorio", "idTipoMedicamento"]
    });
}


