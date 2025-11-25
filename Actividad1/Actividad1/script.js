const pantalla = document.getElementById("pantalla");

// Función para agregar valores a la pantalla
function agregar(valor) {
    // Validar que el último carácter no sea un operador duplicado
    const ultimo = pantalla.value.slice(-1);
    if (["+", "-", "*", "/"].includes(ultimo) && ["+", "-", "*", "/"].includes(valor)) {
        return; // Evita operadores consecutivos
    }
    pantalla.value += valor;
}

// Función para limpiar la pantalla
function limpiar() {
    pantalla.value = "";
}

// Función para calcular el resultado
function calcular() {
    try {
        let expresion = pantalla.value;

        // Validar que no esté vacío
        if (expresion.trim() === "") {
            alert("Ingrese una operación para calcular.");
            return;
        }

        // Validar caracteres válidos
        if (!/^[0-9+\-*/.]+$/.test(expresion)) {
            alert("Solo se permiten números y operadores (+, -, *, /).");
            return;
        }

        // Validar división entre cero
        if (expresion.includes("/0")) {
            alert("Error: No se puede dividir entre cero.");
            return;
        }

        // Evaluar la operación
        let resultado = eval(expresion);
        pantalla.value = resultado;
    } catch (error) {
        alert("Operación inválida. Verifique los datos ingresados.");
    }
}
