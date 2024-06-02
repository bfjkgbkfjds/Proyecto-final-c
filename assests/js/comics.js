document.addEventListener("DOMContentLoaded", function() {
    const comicId = localStorage.getItem('comicId');
    if (comicId) {
        fetch(`https://api-comics-p.onrender.com`)
            .then(response => response.json())
            .then(response => {
                if (response.comics && response.comics.length > 0) {
                    const comic = response.comics.find(comic => comic.id == comicId);
                    if (comic) {
                        const comicDetailsContainer = document.getElementById('comicDetailsContainer');
                        comicDetailsContainer.innerHTML = `
                            <div class="card">
                                <div class="card-header">
                                    <h2 class="card-title">${comic.name || 'N/A'}</h2>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Categoría: ${comic.categoria || 'N/A'}</p>
                                    <p class="card-text">Precio: ${comic.precio || 'N/A'}</p>
                                    <img src="${comic.imagen || ''}" class="card-img-top" alt="${comic.name || 'N/A'}">
                                    <p class="card-text">Stock disponible: ${comic.stock || 'N/A'}</p>
                                    <button class="btn btn-primary btn-add-to-cart">Añadir al carrito</button>
                                </div>
                            </div>
                        `;
                    } else {
                        console.error('Cómic no encontrado');
                    }
                } else {
                    console.error('No se encontraron cómics en la respuesta');
                }
            })
            .catch(error => console.error('Error al obtener los datos del cómic:', error));
    } else {
        console.error('comicId no encontrado');
    }
});