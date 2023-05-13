import { getFilmsData } from './data.js';
// declaración de variable que muestra el array de películas al cargar en DOM
let filmsData = getFilmsData();

filmsData.forEach(data => {
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const p = document.createElement('p');
  h2.textContent = data.title;
  img.src = data.poster;
  p.textContent = data.description;
  document.getElementById("root").appendChild(h2);
  document.getElementById("root"). appendChild(img);
  document.getElementById("root").appendChild(p);
});


