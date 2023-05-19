const video = document.getElementById("video");
const fullScreenBtn = document.getElementById("fullscreen-btn");

// Función para expandir el video en pantalla completa
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

// Función para cerrar la pantalla completa
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

// Cambiar el ícono del botón cuando se expande o se cierra el video en pantalla completa
function toggleFullscreenIcon() {
  const icon = fullScreenBtn.querySelector("i");
  icon.classList.toggle("fa-expand");
  icon.classList.toggle("fa-compress");
}

// Manejador de eventos para el botón de pantalla completa
fullScreenBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    closeFullscreen();
    toggleFullscreenIcon();
  } else {
    openFullscreen(video);
    toggleFullscreenIcon();
  }
});

// Actualizar el tamaño del video cuando cambia el tamaño de la ventana del navegador
window.addEventListener("resize", () => {
  if (document.fullscreenElement) {
    video.style.width = "100vw";
    video.style.height = "100vh";
  } else {
    video.style.width = "100%";
    video.style.height = "auto";
  }
});
