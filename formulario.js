//Este es un código de javaScript que se encarga de realizar la inclusión de 
//una tarjeta con un nombre, edad y nacionalidad de personas para ser invitados
//a una fiesta y tener la opción de borrar personas de esto mismo.

var formulario = document.querySelector(".formulario");

formulario.onsubmit = function(event) {
  event.preventDefault();

  var nombreInput = formulario.elements[0]; // Renombrar la variable 'n' a 'nombreInput'
  var edadInput = formulario.elements[1]; // Renombrar la variable 'e' a 'edadInput'
  var nacionalidadSelect = formulario.elements[2]; // Renombrar la variable 'na' a 'nacionalidadSelect'

  var nombre = nombreInput.value;
  var edad = parseInt(edadInput.value);
  var indiceSeleccionado = nacionalidadSelect.selectedIndex; // Renombrar la variable 'i' a 'indiceSeleccionado'
  var nacionalidad = nacionalidadSelect.options[indiceSeleccionado].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreInput.classList.add("error"); // Renombrar la variable 'n' a 'nombreInput'
  }
  if (edad < 18 || edad > 120 || isNaN(edad)) {
    edadInput.classList.add("error"); // Renombrar la variable 'e' a 'edadInput'
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}
//if para agregar invitados
function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var listaInvitados = document.getElementById("lista-de-invitados"); // Renombrar la variable 'lista' a 'listaInvitados'

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  listaInvitados.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanDescripcion = document.createElement("span"); // Renombrar la variable 'spanNombre' a 'spanDescripcion'
    var inputValor = document.createElement("input"); // Renombrar la variable 'inputNombre' a 'inputValor'
    var espacio = document.createElement("br");
    spanDescripcion.textContent = descripcion + ": ";
    inputValor.value = valor;
    elementoLista.appendChild(spanDescripcion);
    elementoLista.appendChild(inputValor);
    elementoLista.appendChild(espacio);
  }
//Creación de elementos para poder hacer funcional la tarjeta con su botón de borrar
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  }
}