// Explicación sobre funciones en JavaScript

// 1. Función declarativa
// Se define con la palabra clave 'function' y puede ser llamada antes de su declaración

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Victor"));

// 2. Función expresiva o anónima
// Se almacena en una variable, no puede ser llamada antes de su declaración
const despedir = function(nombre) {
    return `Adiós, ${nombre}!`;
};
console.log(despedir("Victor"));

// 3. Función de flecha (Arrow Function)
// Sintaxis más concisa, no tiene su propio 'this'
const sumar = (a, b) => a + b;
console.log(sumar(5, 3));

// 4. Función de flecha con más de una línea
const multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
};
console.log(multiplicar(4, 6));

// 5. Función autoinvocada (IIFE)
// Se ejecuta inmediatamente después de ser definida
(function() {
    console.log("Esta función se ejecuta inmediatamente");
})();

// 6. Función dentro de un objeto (métodos de objetos)
const calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    }
};
console.log(calculadora.sumar(10, 4));
console.log(calculadora.restar(10, 4));

// 7. Función con parámetros por defecto
function saludarConEdad(nombre = "Invitado", edad = 18) {
    return `Hola ${nombre}, tienes ${edad} años.`;
}
console.log(saludarConEdad("Juan", 25));
console.log(saludarConEdad());



// 10. Función asincrónica (Async/Await)
// Permite manejar promesas de forma más sencilla

async function obtenerDatos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 2000);
    });
}
(async () => {
    console.log("Cargando datos...");
    const datos = await obtenerDatos();
    console.log(datos);
})();
