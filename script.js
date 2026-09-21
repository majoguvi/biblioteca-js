// Función que organiza la solicitud del usuario
function Solicitud(array) {
    let nombreUsuario = array.shift();

    // Agrega el carné al inicio
    array.unshift("Carné de socio");

    // Agrega el nombre del usuario al final
    array.push(nombreUsuario);

    return array;
}

let botonSolicitar = document.getElementById("botonSolicitar");
let nombreInput = document.getElementById("nombre");
let contador = document.getElementById("contador");
let resultadoContainer = document.getElementById("resultado-container");
let resultadoDiv = document.getElementById("resultado");
let mensaje = document.getElementById("mensaje");

let checkboxes = document.querySelectorAll(".libro-checkbox");

// Actualiza la cantidad de libros seleccionados
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        let seleccionados = document.querySelectorAll(".libro-checkbox:checked");
        contador.textContent = seleccionados.length + " seleccionados";
    });
});

// Procesa la solicitud cuando se presiona el botón
botonSolicitar.addEventListener("click", function() {
    let nombre = nombreInput.value.trim();
    let librosSeleccionados = document.querySelectorAll(".libro-checkbox:checked");

    if (nombre === "") {
        alert("Por favor, escribe tu nombre.");
        return;
    }

    if (librosSeleccionados.length === 0) {
        alert("Por favor, selecciona al menos un libro.");
        return;
    }

    let libros = [];

    // Guarda los libros seleccionados
    librosSeleccionados.forEach(function(libro) {
        libros.push(libro.value);
    });

    let solicitud = [nombre, ...libros];
    let resultado = Solicitud(solicitud);

    resultadoDiv.innerHTML = "";

    // Muestra el resultado en la página
    resultado.forEach(function(elemento) {
        let elementoHTML = document.createElement("div");
        elementoHTML.classList.add("elemento-resultado");
        elementoHTML.textContent = elemento;
        resultadoDiv.appendChild(elementoHTML);
    });

    mensaje.textContent = "Hola " + nombre + ", tu solicitud fue registrada correctamente.";
    resultadoContainer.classList.remove("oculto");
    resultadoContainer.scrollIntoView({ behavior: "smooth" });
});