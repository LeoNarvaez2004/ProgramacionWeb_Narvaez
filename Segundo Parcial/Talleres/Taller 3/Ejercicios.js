const estudiantes = [
    { nombre: "Juan Pérez", calificaciones: [18, 15, 16, 20, 19] },
    { nombre: "Ana Gómez", calificaciones: [17, 19, 20, 15, 18] },
    { nombre: "Luis Martínez", calificaciones: [10, 12, 15, 14, 11] },
    { nombre: "Carla Fernández", calificaciones: [20, 19, 18, 17, 16] },
    { nombre: "Miguel Torres", calificaciones: [14, 13, 15, 16, 12] },
    { nombre: "Elena Sánchez", calificaciones: [18, 17, 19, 20, 20] },
    { nombre: "Diego Ramírez", calificaciones: [11, 14, 12, 10, 13] },
    { nombre: "Lucía Díaz", calificaciones: [19, 18, 17, 16, 15] },
    { nombre: "Antonio López", calificaciones: [13, 12, 15, 14, 10] },
    { nombre: "María Castillo", calificaciones: [17, 18, 19, 20, 16] }
];

let mejorEstudiante = estudiantes[0];
let peorEstudiante = estudiantes[0];

for (let estudiante of estudiantes) {
    let suma = 0;
    for (let calificacion of estudiante.calificaciones) {
        suma += calificacion;
    }
    let promedio = suma / estudiante.calificaciones.length;

    let clasificacion;
    if (promedio >= 16) {
        clasificacion = "Excelente";
    } else if (promedio >= 12) {
        clasificacion = "Bueno";
    } else if (promedio >= 8) {
        clasificacion = "Aprobado";
    } else {
        clasificacion = "Reprobado";
    }

    let maxima = estudiante.calificaciones[0];
    let minima = estudiante.calificaciones[0];
    for (let calificacion of estudiante.calificaciones) {
        if (calificacion > maxima) {
            maxima = calificacion;
        }
        if (calificacion < minima) {
            minima = calificacion;
        }
    }

    console.log("Nombre: " + estudiante.nombre);
    console.log("Clasificación: " + clasificacion);
    console.log("Promedio: " + promedio.toFixed(2));
    console.log("Nota Máxima: " + maxima);
    console.log("Nota Mínima: " + minima);
    console.log("--------------------------");

    let promedioPeor = 0;
    for (let calificacion of peorEstudiante.calificaciones) {
        promedioPeor += calificacion;
    }
    promedioPeor /= peorEstudiante.calificaciones.length;

    let promedioMejor = 0;
    for (let calificacion of mejorEstudiante.calificaciones) {
        promedioMejor += calificacion;
    }
    promedioMejor /= mejorEstudiante.calificaciones.length;

    if (promedio < promedioPeor) {
        peorEstudiante = estudiante;
    }
    if (promedio > promedioMejor) {
        mejorEstudiante = estudiante;
    }
}

let sumaMejor = 0;
for (let calificacion of mejorEstudiante.calificaciones) {
    sumaMejor += calificacion;
}
let promedioFinalMejor = sumaMejor / mejorEstudiante.calificaciones.length;

let sumaPeor = 0;
for (let calificacion of peorEstudiante.calificaciones) {
    sumaPeor += calificacion;
}
let promedioFinalPeor = sumaPeor / peorEstudiante.calificaciones.length;

console.log("Mejor estudiante: " + mejorEstudiante.nombre + " con un promedio de " + promedioFinalMejor);
console.log("Peor estudiante: " + peorEstudiante.nombre + " con un promedio de " + promedioFinalPeor);
