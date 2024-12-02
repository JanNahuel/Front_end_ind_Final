// Selección de elementos del DOM
const form = document.getElementById('client-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const clientTableBody = document.getElementById('client-table-body');

// Función para manejar el envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  // Obtener valores de los inputs
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

  // Validación básica
    if (name === '' || email === '' || phone === '') {
        alert('Por favor, completa todos los campos.');
    return;
}

  // Crear una nueva fila en la tabla de clientes
addClientToTable(name, email, phone);

  // Limpiar los campos del formulario
    form.reset();
});

// Función para agregar un cliente a la tabla
function addClientToTable(name, email, phone) {
    const row = document.createElement('tr');

  // Crear las celdas de la fila
    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const emailCell = document.createElement('td');
    emailCell.textContent = email;

    const phoneCell = document.createElement('td');
    phoneCell.textContent = phone;

  // Agregar celdas a la fila
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);

  // Agregar la fila al cuerpo de la tabla
    clientTableBody.appendChild(row);
}
