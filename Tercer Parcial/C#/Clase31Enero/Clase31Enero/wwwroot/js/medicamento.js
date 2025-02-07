window.onload = function () {
    listarMedicamento();
}

async function listarMedicamento() {
    fetchGet("Medicamento/numeroEntero", "json", function (res) {
        alert(res);
    });
}