document.addEventListener("DOMContentLoaded", function() {
    const Id = localStorage.getItem('comicId');
    if (Id) {
      fetch(`https://api-comics-p.onrender.com/${Id}`)
        .then(response => response.json())
        .then(comic => {
          const comicDetailsContainer = document.getElementById('comicDetailsContainer');
          comicDetailsContainer.innerHTML = `
            <div class="card">
              <div class="card-header">
                <h2 class="card-title">${comic.name}</h2>
              </div>
              <div class="card-body">
                <p class="card-text">Categoría: ${comic.categoria}</p>
                <p class="card-text">Precio: ${comic.precio}</p>
                <img src="${comic.imagen}" class="card-img-top" alt="${comic.name}">
                <p class="card-text">Stock disponible: ${comic.stock}</p>
              </div>
            </div>
          `;
        })
        .catch(error => console.error('Error:', error));
    } else {
      console.error('comicId no encontrado');
    }
});