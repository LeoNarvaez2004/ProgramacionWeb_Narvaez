function get(valor) {
    return document.getElementById(valor).value;
}
function set(idControl, valor) {
    document.getElementById(idControl).value = valor;
}

function setN(namecontrol, valor) {
    document.getElementByName(namecontrol[0].value) = valor;
}
function getN(namecontrol) {
    return document.getElementByName(namecontrol)[0].value;
}
function limpiarDatos(idFormulario) {
    // Seleccionar todos los elementos del formulario con atributo "name"
    let elementos = document.querySelectorAll("#" + idFormulario + " [name]");
    console.log(elementos); // Verificar en consola los elementos seleccionados
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].value = ""; // Limpiar el valor de cada elemento
    }
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
        alert("Ocurrio un problema en GET");
    }

    
}
//id ="frmBusqueda" method = post
async function fetchPost(url,tipoRespuesta,frm,callback) {
    try{
        let raiz = document.getElementById("hdfOculto").value;
        let urlCompleta = window.location.protocol + "//" + window.location.host + "/" + url;
        let res = await fetch(urlCompleta, {
            method: "POST",
            body: frm
        });
        if (tipoRespuesta == "json")
            res = await res.json();
        else if (tipoRespuesta == "text")
            res = res.text();
        else if (tipoRespuesta == "none")
            res = null;
        callback(res);

    }catch (e) {
        alert("Ocurrio un problema en POST");
    }
}

let objConfiguracionGlobal;
//{url: "", nombreCabeceras:[], nombrepropiedades:[]}

function pintar(objConfiguracion) {
    objConfiguracionGlobal = objConfiguracion;
    if (objConfiguracionGlobal.divContenedor == undefined) {
        objConfiguracionGlobal.divContenedor = "divContenedor"
    }
    fetchGet(objConfiguracion.url, "json", function (res) {
        let contenido = "";
        contenido += "<div id='divContenedor'>";

        contenido += generarTabla(res);
        contenido += "</div>";
        document.getElementById("divTabla").innerHTML =contenido;
    })
}

function generarTabla(res) {
    if (!res || res.length === 0) {
        return "<p>No se encontraron resultados.</p>";
    }

    let contenido = "<table class='table'>";
    contenido += "<thead><tr>";

    let cabeceras = objConfiguracionGlobal.cabeceras;
    let propiedades = objConfiguracionGlobal.propiedades;

    for (let i = 0; i < cabeceras.length; i++) {
        contenido += "<th>" + cabeceras[i] + "</th>";
    }
    contenido += "</tr></thead><tbody>";

    for (let i = 0; i < res.length; i++) {
        contenido += "<tr>";
        for (let j = 0; j < propiedades.length; j++) {
            contenido += "<td>" + (res[i][propiedades[j]] || "N/A") + "</td>";
        }
        contenido += "</tr>";
    }
    contenido += "</tbody></table>";

    console.log("Tabla generada:", contenido); // <-- AGREGADO PARA DEBUG
    return contenido;
}
