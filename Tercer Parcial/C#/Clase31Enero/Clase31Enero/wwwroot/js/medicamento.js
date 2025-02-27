window.onload = function () {
    listarMedicamento();
}

async function listarMedicamento() {
    objMedicamento = {
        url: "Medicamento/ListarMedicamentos",
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Id Laboratorio","Id Tipo Medicamento"],
        propiedades: ["idMedicamento", "nombre", "idLaboratorio","idTipoMedicamento"],
        editar: true,
        eliminar: true,
        propiedadId: "idMedicamento"
    };
    pintar(objMedicamento);
}
async function filtrarMedicamento() {
    let idMed = document.getElementById("idMed").value;
    let nombre = document.getElementById("nombre").value;
    let idLab = document.getElementById("idLab").value;
    let idTM = document.getElementById("idTM").value;
    objMedicamento = {
        url: "Medicamento/filtrarMedicamento?idMed=" + idMed + "&nombre=" + nombre + "&idLab=" + idLab + "&idTM=" + idTM,
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Id Laboratorio", "Id Tipo Medicamento"],
        propiedades: ["idMedicamento", "nombre", "idLaboratorio", "idTipoMedicamento"],
        editar: true,
        eliminar: true,
        propiedadId: "idMedicamento"
    };
    pintar(objMedicamento);
}