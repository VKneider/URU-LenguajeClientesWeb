// ==============================
// EVENTOS DEL DOM EN JAVASCRIPT
// ==============================

// 1. EVENTOS DEL MOUSE
document.addEventListener("click", () => {
    console.log("El usuario hizo clic en cualquier parte del documento.");
});
// Se dispara cuando el usuario hace clic en un elemento.

document.addEventListener("dblclick", () => {
    console.log("Doble clic detectado.");
});
// Se dispara cuando el usuario hace doble clic en un elemento.

document.addEventListener("mousedown", () => {
    console.log("Se presionó un botón del mouse.");
});
// Se activa cuando se presiona un botón del mouse.

document.addEventListener("mouseup", () => {
    console.log("Se soltó un botón del mouse.");
});
// Se activa cuando se suelta un botón del mouse.

document.addEventListener("mousemove", () => {
    console.log("El mouse se está moviendo.");
});
// Se ejecuta cada vez que el mouse se mueve dentro del documento.

document.addEventListener("mouseover", () => {
    console.log("El mouse pasó sobre un elemento.");
});
// Se dispara cuando el mouse entra en un elemento.

document.addEventListener("mouseout", () => {
    console.log("El mouse salió de un elemento.");
});
// Se dispara cuando el mouse deja un elemento.

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("Se abrió el menú contextual (botón derecho).");
});
// Se ejecuta cuando se intenta abrir el menú contextual (clic derecho).

// 2. EVENTOS DEL TECLADO
document.addEventListener("keydown", (event) => {
    console.log(`Tecla presionada: ${event.key}`);
});
// Se ejecuta cuando se presiona una tecla.

document.addEventListener("keyup", (event) => {
    console.log(`Tecla soltada: ${event.key}`);
});
// Se ejecuta cuando se suelta una tecla.

document.addEventListener("keypress", (event) => {
    console.log(`Tecla presionada (sin detectar teclas especiales): ${event.key}`);
});
// Similar a keydown, pero no detecta teclas especiales como Shift o Ctrl.

// 3. EVENTOS DE FORMULARIOS
document.addEventListener("focus", (event) => {
    console.log(`Campo enfocado: ${event.target.name}`);
}, true);
// Se dispara cuando un campo de entrada recibe el foco.

document.addEventListener("blur", (event) => {
    console.log(`Campo perdió el foco: ${event.target.name}`);
}, true);
// Se dispara cuando un campo de entrada pierde el foco.

document.addEventListener("change", (event) => {
    console.log(`Valor cambiado en: ${event.target.name}`);
});
// Se ejecuta cuando el valor de un input, select o textarea cambia.

document.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formulario enviado.");
});
// Se ejecuta cuando un formulario es enviado.

// 4. EVENTOS DE LA VENTANA Y DOCUMENTO
window.addEventListener("load", () => {
    console.log("Página completamente cargada.");
});
// Se dispara cuando la página y todos sus recursos (imágenes, scripts) se han cargado.

window.addEventListener("resize", () => {
    console.log("La ventana ha cambiado de tamaño.");
});
// Se activa cuando la ventana del navegador cambia de tamaño.

window.addEventListener("scroll", () => {
    console.log("Se ha desplazado la página.");
});
// Se ejecuta cuando el usuario desplaza la página.

window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "";
});
// Se dispara cuando el usuario intenta salir de la página.

// 5. EVENTOS DE COPIADO Y PEGADO
document.addEventListener("copy", () => {
    console.log("Texto copiado.");
});
// Se activa cuando el usuario copia texto.

document.addEventListener("cut", () => {
    console.log("Texto recortado.");
});
// Se activa cuando el usuario corta texto.

document.addEventListener("paste", () => {
    console.log("Texto pegado.");
});
// Se activa cuando el usuario pega texto.

// 6. EVENTOS DE DRAG & DROP
document.addEventListener("dragstart", () => {
    console.log("Inicio del arrastre.");
});
// Se ejecuta cuando se empieza a arrastrar un elemento.

document.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("Elemento arrastrado sobre una zona.");
});
// Se ejecuta cuando un elemento se arrastra sobre una zona permitida.

document.addEventListener("drop", () => {
    console.log("Elemento soltado.");
});
// Se ejecuta cuando un elemento es soltado en una zona de destino.

// 7. EVENTOS DE MULTIMEDIA
document.addEventListener("play", () => {
    console.log("Reproducción iniciada.");
});
// Se dispara cuando se inicia la reproducción de un video o audio.

document.addEventListener("pause", () => {
    console.log("Reproducción pausada.");
});
// Se dispara cuando la reproducción se pausa.

document.addEventListener("ended", () => {
    console.log("Reproducción terminada.");
});
// Se dispara cuando la reproducción finaliza.

document.addEventListener("volumechange", () => {
    console.log("El volumen ha cambiado.");
});
// Se ejecuta cuando el volumen de un video o audio cambia.

document.addEventListener("timeupdate", () => {
    console.log("El tiempo de reproducción ha cambiado.");
});
// Se activa cuando el tiempo de reproducción cambia en un video o audio.

document.addEventListener("fullscreenchange", () => {
    console.log("Modo pantalla completa cambiado.");
});
// Se ejecuta cuando se entra o sale del modo pantalla completa.

// ==============================
// USO DE EVENTOS EN ELEMENTOS ESPECÍFICOS
// ==============================

const boton = document.createElement("button");
boton.textContent = "Haz clic aquí";
document.body.appendChild(boton);

// Evento en un botón específico
boton.addEventListener("click", () => {
    console.log("¡Botón clickeado!");
});

// ==============================
// EVENTOS PERSONALIZADOS (CustomEvent)
// ==============================

// Creación de un evento personalizado
const eventoPersonalizado = new CustomEvent("miEvento", {
    detail: { mensaje: "Esto es un evento personalizado" }
});

// Escuchando el evento
document.addEventListener("miEvento", (event) => {
    console.log(event.detail.mensaje);
});

// Disparando el evento
document.dispatchEvent(eventoPersonalizado);

