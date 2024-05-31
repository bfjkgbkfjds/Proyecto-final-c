document.addEventListener("DOMContentLoaded", function() {
  fetch('https://api-comics-p.onrender.com')
    .then(response => response.json())
    .then(data => {
      const comicsContainer = document.getElementById('comicsContainer');
      data.comics.forEach(comic => {
        const card = document.createElement('div');
        card.className = 'col-md-3';
        card.innerHTML = `
          <div class="card">
            <img src="${comic.imagen}" class="card-img-top" alt="${comic.name}">
            <div class="card-body">
              <h5 class="card-title">${comic.name}</h5>
              <p class="card-text">Precio: ${comic.precio}</p>
              <button class="btn btn-primary btn-details" data-id="${comic.id}">Ver detalles</button>
            </div>
          </div>
        `;
        comicsContainer.appendChild(card);
      });


      const btnDetailsList = document.querySelectorAll('.btn-details');
      btnDetailsList.forEach(btn => {
        btn.addEventListener('click', function() {
          const comicId = this.getAttribute('data-id');
          localStorage.setItem('comicId', comicId); 
          window.location.href = 'comic.html';
        });
      });
    })
    .catch(error => console.error('Error fetching comics:', error));
});

