window.onload = function ()
{
    listarTipoMedicamento();
}
async function listarTipoMedicamento() {
    generar({
        url: "TipoMedicamento/listarMedicamento",
        cabeceras: ["Id", "Nombre", "Descripcion", "Acciones"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion","estado"]
    });
}