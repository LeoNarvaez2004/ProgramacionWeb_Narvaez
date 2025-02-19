window.onload = function ()
{
    listarTipoMedicamento();
}

let objTipoMedicamento;
function fitrarTipoMedicamento() {
    let nombre = document.getElementById("nombreTipoMed").value;
    if (nombre === "") {
        listarTipoMedicamento();
    } else {
        objTipoMedicamento.url = "TipoMedicamento/FiltrarTipoMedicamento?nombre=" + nombre;
        pintar(objTipoMedicamento);
    }
}

async function listarTipoMedicamento() {
    objTipoMedicamento = {
        url: "TipoMedicamento/listarMedicamento",
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Descripcion","Stock"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion","stock"]
    };
    pintar(objTipoMedicamento);
}

/*
async function eliminarMed() {
    let id = document.getElementById("idEli").value;
    fetchGet("TipoMedicamento/eliminarMed/?id=" + id, "none", function (res) { });
    alert(id);
}

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
}
*/

async function filtraTipoMed() {
    let nombre = document.getElementById("nombreTipoMed").value;
    pintar({
        url: "TipoMedicamento/FiltrarTipoMedicamento?nombre=" + encodeURIComponent(nombre),
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"]
    });
}

async function Limpiar() {

    document.getElementById("nombreTipoMed").value = "";

    pintar({
        url: "TipoMedicamento/FiltrarTipoMedicamento/?nombre=",
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"]
    });
}


