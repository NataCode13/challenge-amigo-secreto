// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//arreglo para almacenar los nombres
let amigos = [];

//agregar un amigo
function agregarAmigo() {
  //querySelector para obtener el texto ingresado
  const input = document.querySelector('#amigo');
  const nombre = (input.value || '').trim();

  //validar campo vacío o solo números
  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    return;
  }
  if (/^\d+$/.test(nombre)) {
    alert('Por favor, ingrese un nombre válido (no solo números).');
    return;
  }

  //si es válido, se agrega el nombre al arreglo
  amigos.push(nombre);

  //se limpia el campo de texto
  input.value = '';
  input.focus();

  // 6) Volver a pintar la lista en pantalla
  verLista();
}

function verLista() {
  // usar querySelector para seleccionar la lista
  const lista = document.querySelector('#listaAmigos');

  //Limpiar la lista para evitar duplicados
  lista.innerHTML = '';

  //recorrer el arreglo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li'); //Crea un nuevo <li>
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

//Sortear un amigo al azar
function sortearAmigo() {
  // Comprobar que el arreglo no esté vacío
  if (amigos.length === 0) {
    alert('La lista está vacía, ingresar al menos un nombre antes de sortear.');
    return;
  }

  //Obtener un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  //Usar el índice para obtener el nombre
  const seleccionado = amigos[indiceAleatorio];

  //Mostrar el resultado final
  document.getElementById('resultado').innerHTML =
    `El Amigo secreto es: <strong>${seleccionado}</strong>`;
}
