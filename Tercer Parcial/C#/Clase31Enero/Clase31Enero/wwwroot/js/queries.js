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
        alert("Ocurrio un problema en GET: "+e);
    }


}
//id ="frmBusqueda" method = post
async function fetchPost(url, tipoRespuesta, frm, callback) {
    try {
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

    } catch (e) {
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
    if (objConfiguracionGlobal.editar == undefined) {
        objConfiguracionGlobal.editar = false
    }
    if (objConfiguracionGlobal.eliminar == undefined) {
        objConfiguracionGlobal.eliminar = false
    }
    fetchGet(objConfiguracion.url, "json", function (res) {
        let contenido = "";
        contenido += "<div id='divContenedor'>";

        contenido += generarTabla(res);
        contenido += "</div>";
        document.getElementById("divTabla").innerHTML = contenido;
    })
}

function generarTabla(res) {
    if (!res || res.length === 0) {
        return "<p>No se encontraron resultados.</p>";
    }

    let contenido = "<table class='table'>";
    contenido += "<thead><tr>";

    // Agregar cabeceras
    let cabeceras = objConfiguracionGlobal.cabeceras;
    let propiedades = objConfiguracionGlobal.propiedades;

    for (let i = 0; i < cabeceras.length; i++) {
        contenido += "<th>" + cabeceras[i] + "</th>";
    }

    // Agregar columna de operaciones si es necesario
    if (objConfiguracionGlobal.editar || objConfiguracionGlobal.eliminar) {
        contenido += "<th>Operaciones</th>";
    }

    contenido += "</tr></thead><tbody>";

    // Generar filas de datos
    for (let i = 0; i < res.length; i++) {
        contenido += "<tr>";

        // Agregar valores de las propiedades
        for (let j = 0; j < propiedades.length; j++) {
            contenido += "<td>" + (res[i][propiedades[j]] || "N/A") + "</td>";
        }

        // Agregar botones de operaciones si es necesario
        if (objConfiguracionGlobal.editar || objConfiguracionGlobal.eliminar) {
            contenido += "<td>";

            if (objConfiguracionGlobal.editar) {
                contenido += `<i class="btn btn-primary" onclick="editar(${i})"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg> 
                              </i>`;
            }

            if (objConfiguracionGlobal.eliminar) {
                contenido += `<i class="btn btn-danger" onclick="eliminar(${i})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg>
                              </i>`;
            }

            contenido += "</td>";
        }

        contenido += "</tr>";
    }

    contenido += "</tbody></table>";
    console.log("Tabla generada:", contenido); // <-- AGREGADO PARA DEBUG
    return contenido;
}