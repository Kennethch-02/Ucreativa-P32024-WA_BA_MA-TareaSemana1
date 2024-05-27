function cambiarContenido(seccion) {
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const contenidos = {
      'The City': `
        <h1>The City</h1>
        <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
        <img src="imgs/theCity.jpg" alt="The City"/>
      `,
      'The Food': `
        <h1>The Food</h1>
        <p>Chania is known for its delicious Cretan cuisine, which is a blend of Greek and Mediterranean flavors. Some must-try dishes include dakos (a rustic salad with tomatoes, feta, and crusty bread), kalitsounia (sweet or savory cheese pastries), and of course, fresh seafood.</p>
        <img src="imgs/theFood.png" alt="The Food"/>
      `
    };
  
    contenidoPrincipal.innerHTML = contenidos[seccion] || 'Contenido no encontrado.';
  }
  
  // Agregar event listeners a los elementos de la lista
  document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        cambiarContenido(this.textContent);
      });
    });
  });