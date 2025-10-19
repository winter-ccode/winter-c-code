// Modal para galería de imágenes
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal-galeria');
  const modalImg = document.getElementById('modal-img');
  const cerrarModal = document.getElementById('cerrar-modal');
  const imagenes = document.querySelectorAll('.img-galeria');

  imagenes.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });

  cerrarModal.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});