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


/* 

function loadCSV() {
  // Aquí cargarías el CSV y lo convertirías en una tabla HTML
  // Por simplicidad, usaremos datos estáticos
  const data = `ID DEPATAMENTO,DEPARTAMENTO,ID MUNICIPIO,MUNICIPIO,ID LOCALIDAD,LOCALIDAD,AÑO SERVICIO,MES SERVICIO,ENERGÍA ACTIVA,ENERGÍA REACTIVA,POTENCIA MÁXIMA,DÍA DE DEMANDA MÁXIMA,FECHA DE DEMANDA MÁXIMA,PROMEDIO DIARIO EN HORAS
91,AMAZONAS,91001,LETICIA,91001000,LETICIA (LETICIA - AMAZONAS),2024,06,"3,994,102","1,010,671","7,824.51",Jueves,06/20/2024 03:30:00 PM,24
91,AMAZONAS,91540,PUERTO NARIÑO,91540000,PUERTO NARIÑO (PUERTO NARIÑO - AMAZONAS),2024,06,"127,838","40,378",256,Miércoles,06/05/2024 06:15:00 PM,24`;

  const rows = data.split('\n');
  const table = document.getElementById('dataTable');
  table.innerHTML = '';

  rows.forEach((row, index) => {
      const cols = row.split(',');
      const tr = document.createElement('tr');
      cols.forEach(col => {
          const td = document.createElement(index === 0 ? 'th' : 'td');
          td.textContent = col;
          tr.appendChild(td);
      });
      table.appendChild(tr);
  });
}

function filterTable() {
  const input = document.getElementById('searchInput').value.toUpperCase();
  const table = document.getElementById('dataTable');
  const tr = table.getElementsByTagName('tr');

  for (let i = 1; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName('td');
      let found = false;
      for (let j = 0; j < td.length; j++) {
          if (td[j].textContent.toUpperCase().indexOf(input) > -1) {
              found = true;
              break;
          }
      }
      tr[i].style.display = found ? '' : 'none';
  }
}

function downloadCSV() {
  const table = document.getElementById('dataTable');
  const rows = table.getElementsByTagName('tr');
  let csvContent = '';

  for (let i = 0; i < rows.length; i++) {
      const cols = rows[i].getElementsByTagName('td');
      let row = [];
      for (let j = 0; j < cols.length; j++) {
          row.push(cols[j].textContent);
      }
      csvContent += row.join(',') + '\n';
  }

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'datos_filtrados.csv';
  a.click();
  URL.revokeObjectURL(url);
}

function graphData() {
  // Aquí podrías implementar la lógica para graficar los datos
  alert('Graficar datos...');
}
  */