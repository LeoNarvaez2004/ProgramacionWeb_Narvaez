window.onload = function ()
{
    listarTipoMedicamento();
}

async function listarTipoMedicamento() {
    pintar({
        url: "TipoMedicamento/listarMedicamento",
        cabeceras: ["ID Tipo Medicamento", "Nombre", "Descripcion","Stock"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion","stock"]
    });

    /*
    fetchGet("TipoMedicamento/listarMedicamento", "json", function (res) {
        let contenido = "";
        contenido += "<table class = 'table'>";
        contenido += "<thead>";
        contenido += "<tr>";
        contenido += "<td>Id Tipo Medicamento</td>";
        contenido += "<td>Nombre</td>";
        contenido += "<td>Descripcion</td>";
        contenido += "</tr>";
        contenido += "</thead>"
        
        let nroRegistros = res.length;
        let obj;

        contenido += "<tbody>";

        for (let i = 0; i < nroRegistros; i++) {
            obj = res[i];
            contenido += "<tr>";
            contenido += "<td>"+obj.idTipoMedicamento+"</td>";
            contenido += "<td>"+obj.nombre+"</td>";
            contenido += "<td>"+obj.descripcion+"</td>";
            contenido += "<tr>";

        }
        contenido += "</table >";
        document.getElementById("divTabla").innerHTML = contenido;

        /*alert(res);
        alert(JSON.stringify(res, null, 2));
    });

    try {
        let raiz = document.getElementById("hdfOculto").value;
        let urlCompleta = window.location.protocol + "//" + window.location.host + "//" + "TipoMedicamento/listarMedicamento";
        let res = await fetch(urlCompleta);
        res = await res.json();

        alert(res);
        alert(JSON.stringify(res,null,2));
    } catch (e) {

    }
    */
}