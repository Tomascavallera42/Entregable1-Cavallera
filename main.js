
const servicios = ["Desinfección", "Control de roedores", "Mantenimiento de jardín", "Servicio General (incluye los 3 servicios anteriores)"];
const precios = [5000, 4000, 3500, 11000]; 
let serviciosSeleccionados = [];


function mostrarSer() {
    console.log("Servicios disponibles:");
    for (let i = 0; i < servicios.length; i++) {
        console.log(`${i + 1}. ${servicios[i]} - $${precios[i]}`);
    }
}


function seleccionarSer() {
    let continuar = true;

    while (continuar) {
        let mensaje = "Seleccione un servicio ingresando el número:\n";
        for (let i = 0; i < servicios.length; i++) {
            mensaje += `${i + 1}. ${servicios[i]}\n`;
        }

        let seleccion = prompt(mensaje);
        let opcion = parseInt(seleccion) - 1;

        if (opcion >= 0 && opcion < servicios.length) {
            serviciosSeleccionados.push(servicios[opcion]);
            alert(`Agregado: ${servicios[opcion]}`);
        } else {
            alert("Opción inválida. Intente nuevamente.");
        }

        continuar = confirm("¿Desea agregar otro servicio?");
    }
}

function totalSer() {
    let total = 0;

    for (let i = 0; i < serviciosSeleccionados.length; i++) {
        let servicio = serviciosSeleccionados[i];
        let opcion = servicios.indexOf(servicio);
        total += precios[opcion];
    }

    return total;
}


function iniciar() {
    alert("Bienvenido a Omega Saneamientos");
    mostrarSer();
    seleccionarSer();

    let total = totalSer();
    alert("Servicios seleccionados:\n" + serviciosSeleccionados.join(", ") + `\n\nTotal a pagar: $${total}`);
    console.log("Detalle del servicio:", serviciosSeleccionados, "Total:", total);
}


iniciar();