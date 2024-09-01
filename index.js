const dropZoneContrato = document.getElementById('dropZoneContrato');
const dropZoneINE = document.getElementById('dropZoneINE');
const inputContrato = document.getElementById('contratoInput');
const inputINE = document.getElementById('ineInput');

;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZoneContrato.addEventListener(eventName, preventDefaults, false);
  dropZoneINE.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

dropZoneContrato.addEventListener('drop', handleFileSelect, false);
dropZoneINE.addEventListener('drop', handleFileSelect, false);

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  const files = evt.dataTransfer.files;
  const input = evt.target.previousElementSibling; // Obtener el input correspondiente
  input.files = files;

  // Aquí puedes realizar acciones adicionales con los archivos seleccionados
  console.log(files);
}