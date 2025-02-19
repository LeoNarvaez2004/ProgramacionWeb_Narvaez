function get(valor) {
    return document.getElementById(valor).value;
}
function set(idControl, valor) {
    document.getElementById(idControl).value = valor;
}

async function fetchGet(url, tipoRespuesta, callback) {
    try {
        let raiz = document.getElementById("hdfOculto").value;
        let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + url;
        let res = await fetch(urlCompleta);
        if (tipoRespuesta == "json")
            res = await res.json();
        else if (tipoRespuesta == "text")
            res = res.text();
        else if (tipoRespuesta == "none")
            res = null;

        callback(res);
    } catch (e) {

    }

    
}

let objConfiguracionGlobal;
//{url: "", nombreCabeceras:[], nombrepropiedades:[]}

function pintar(objConfiguracion) {
    objConfiguracionGlobal = objConfiguracion;
    fetchGet(objConfiguracion.url, "json", function (res) {
        let contenido = "";
        contenido += "<div id='divContenedor'>";

        contenido += generarTabla(res);
        contenido += "</div>";
        document.getElementById("divTabla").innerHTML =contenido;
    })
}

function generarTabla(res) {
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

    let nroRegistros = res.length;
    let obj;
    let propiedadActual;
    contenido += "<tbody>";

    
    for (let i = 0; i < nroRegistros; i++) {
        obj = res[i];
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