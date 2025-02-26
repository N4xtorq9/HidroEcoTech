// Obtener los elementos necesarios
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Abrir el modal cuando se hace clic en el botón
openModalBtn.onclick = function() {
  modal.style.display = 'flex'; // Mostrar el modal
}

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeModalBtn.onclick = function() {
  modal.style.display = 'none'; // Ocultar el modal
}

// Cerrar el modal si se hace clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; // Ocultar el modal
  }
}

document.getElementById('openModal').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'block';
  loadCSV();
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('searchInput').addEventListener('input', function() {
  filterTable();
});

document.getElementById('downloadBtn').addEventListener('click', function() {
  downloadCSV();
});

document.getElementById('graphBtn').addEventListener('click', function() {
  graphData();
});