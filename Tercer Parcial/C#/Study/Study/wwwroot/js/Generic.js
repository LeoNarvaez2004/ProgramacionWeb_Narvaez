async function fetchGet(url, tipoRespuesta, callback) {
    try {
        let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + url;
        let data = await fetch(urlCompleta);
        if (tipoRespuesta == "json")
            data = await data.json();
        else if (tipoRespuesta == "text")
            data = data.text();

        callback(data);
    } catch (e) {

    }
}

let objConfiguracionGlobal;

function generar(objConfiguracion) {
    objConfiguracionGlobal = objConfiguracion;
    fetchGet(objConfiguracion.url, "json", function (data) {
        let contenido = "";
        contenido += "<div id = 'divTabla'>";
        contenido += generarTabla(data);
        contenido += "</div>";
        document.getElementById("divTabla").innerHTML = contenido;
    });
}

function generarTabla(data) {
    let contenido = "";
    let cabeceras = objConfiguracionGlobal.cabeceras;
    let propiedades = objConfiguracionGlobal.propiedades;
    contenido += "<table class = 'table'>";
    contenido += "<thead>";
    contenido += "<tr>";

    for (let i = 0; i < cabeceras.length; i++) {
        contenido += "<td>" + cabeceras[i] + "</td>";
    }
    //contenido += "<td>Id Tipo Medicamento</td>";
    //contenido += "<td>Nombre</td>";
    //contenido += "<td>Descripcion</td>";
    contenido += "</tr>";
    contenido += "</thead>";

    let nroRegistros = data.length;
    let obj;
    let propiedadActual;
    contenido += "<tbody>";


    for (let i = 0; i < nroRegistros; i++) {
        obj = data[i];
        contenido += "<tr>";
        for (let j = 0; j < propiedades.length; j++) {
            propiedadActual = propiedades[j];
            contenido += "<td>" + obj[propiedadActual] + "</td>";
        }
        /*
        contenido += "<td>" + obj.idTipoMedicamento + "</td>";
        contenido += "<td>" + obj.nombre + "</td>";
        contenido += "<td>" + obj.descripcion + "</td>";
        */
        contenido += "<tr>";


    }
    contenido += "</tbody>"
    contenido += "</table >";

    return contenido;
}
