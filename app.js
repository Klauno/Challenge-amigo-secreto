// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarando unas variables
let amigos = [];
let resultadoSorteo = [];

// Función para normalizar texto
function normalizarTexto(texto) {
    return texto.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para añadir amigos 
function agregarAmigo() {
    let nombreAmigo = normalizarTexto(document.getElementById('amigo').value);
    
    // Verifica que el valor ingresado no sea nulo
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre!'); 
        return; // Salir si el nombre está vacío
    } 
    
    // Verificar que no se repita
    if (amigos.includes(nombreAmigo)) {
        alert('Ese nombre ya está en la lista, por favor ingrese otro.');
        document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
        return; // Salir si el nombre ya existe
    } 
    
    // No está en la lista, agrego
    amigos.push(nombreAmigo);
    console.log(nombreAmigo);
    console.log(amigos);
    document.getElementById('amigo').value = ''; // Limpiar el campo de entrada

    // Limpiar resultados anteriores al agregar un nuevo amigo
    resultadoSorteo = []; // Reiniciar la lista de resultados
    actualizarLista(); // Actualizar la lista de amigos
    document.getElementById('resultado').innerHTML = ''; // Limpiar la visualización del resultado
}

// Actualizar la lista de amigos
function actualizarLista() {
    let ulElemento = document.getElementById('listaAmigos');
    ulElemento.innerHTML = ''; // Limpiar la lista actual

    // Loop para recorrer el array e ir generando elementos <li>
    for (let i = 0; i < amigos.length; i++) { 
        const liElemento = document.createElement('li');
        liElemento.textContent = amigos[i];
        ulElemento.appendChild(liElemento); // Agrego los elementos a <ul>
    }
}

// Sortear 
function sortearAmigo() {
    let ulElemento = document.getElementById('resultado');
    ulElemento.innerHTML = ''; // Limpiar resultados anteriores

    if (amigos.length === 0) {
        alert('La lista está vacía. Por favor, ingresa más nombres.'); 
        return; // Salir si la lista está vacía
    }

    // Genero índice aleatorio
    let numeroGenerado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroGenerado];

    resultadoSorteo.push(amigoSorteado); // Guardar el amigo sorteado en el resultado

    // Mostrar el amigo sorteado en la interfaz
    const liElemento = document.createElement('li');
    liElemento.textContent = `¡El amigo sorteado es: ${amigoSorteado}!`;
    ulElemento.appendChild(liElemento);
}
