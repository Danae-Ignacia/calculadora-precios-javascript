let cliente = prompt("Ingresa tu nombre").toLowerCase();
if (cliente != "") {
    alert("Gracias por utilizar la calculadora de precios");
} else {
    alert("Debes ingresar tu nombre");
}

let plan = prompt("ingresa el nombre de tu plan").toLowerCase();

while (plan != "ESC") {
    switch (plan) {
        case "basico":
            alert("Tu descuento será del 20%");
            break;
        case "estandar":
            alert("Tu descuento será del 30%");
            break;
        default:
            alert("Tu descuento será del 50%");
            break;
    }

    plan = prompt("ingresa el nombre de tu plan").toLowerCase;
}