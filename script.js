function mostrarInfo(id) {
    var imagenes = document.getElementsByClassName('imagen');
    var info = document.getElementById('info' + id);
  
    // Restaurar filtros para todas las imágenes
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].style.filter = 'brightness(100%)';
    }
  
    // Aplicar filtro a la imagen clicada
    imagenes[id - 1].style.filter = 'brightness(70%)';
  
    // Mostrar u ocultar la información correspondiente
    info.classList.toggle('mostrar');
  }