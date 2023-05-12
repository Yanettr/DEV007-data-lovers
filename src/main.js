import { getFilmsData } from './data.js';
let filmsData = getFilmsData();

filmsData.forEach(data => {
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  h2.textContent = data.title;
  img.src = data.poster;
  document.getElementById("root").appendChild(h2);
  document.getElementById("root"). appendChild(img);
});














