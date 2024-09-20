// Seleccionamos los elementos
var popup = document.getElementById("popup");
var openPopup = document.getElementById("openPopup");
var closePopup = document.getElementById("closePopup");

// Función para abrir el popup
openPopup.onclick = function() {
    popup.style.display = "block";
}

// Función para cerrar el popup cuando se hace clic en la 'x'
closePopup.onclick = function() {
    popup.style.display = "none";
}

// Cerrar el popup si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
