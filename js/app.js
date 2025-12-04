const grid = document.getElementById('grid-productes');
const buscador = document.getElementById('buscador');

function pintarProductes(llista) {
  grid.innerHTML = '';
  llista.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        ${p.imatge ? `<img src='${p.imatge}' class='card-img-top' alt='${p.nom}'>` : `<div class='bg-secondary card-img-top d-flex align-items-center justify-content-center' style='height:180px;'><span class='text-white-50'>Sense imatge</span></div>`}
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.nom}</h5>
          <p class="card-text">${p.descripcio}</p>
          <div class="mt-auto">
            <span class="badge bg-primary fs-6">${p.preu.toFixed(2)} €</span>
            <a href="producte.html?id=${p.id}" class="btn btn-outline-dark btn-sm float-end">Veure</a>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}

pintarProductes(productes);

buscador.addEventListener('input', () => {
  const text = buscador.value.toLowerCase();
  const filtrats = productes.filter(p =>
    p.nom.toLowerCase().includes(text) ||
    p.descripcio.toLowerCase().includes(text)
  );
  pintarProductes(filtrats);
});