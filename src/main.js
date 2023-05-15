import { getFilmsData, getFilmsByProducer } from './data.js';
// declaración de variable que muestra el array de películas al cargar en DOM
let filmsData = getFilmsData();

filmsData.forEach(data => {
  const div = document.createElement('article');
  div.classList.add('card');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  const p = document.createElement('p');
  h2.textContent = data.title;
  img.src = data.poster;
  p.textContent = data.description;


  div.appendChild(h2)
  div.appendChild(img)
  div.appendChild(p)


  document.getElementById("root").appendChild(div);
});

const selectProducer = document.getElementById('selectProducer');
selectProducer.addEventListener('change', (event) => {
  const selectedProducer = event.target.value;
  const filteredFilms = getFilmsByProducer(selectedProducer);
  document.getElementById("root").textContent = "";
  filteredFilms.forEach(data => {
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    h2.textContent = data.title;
    img.src = data.poster;
    document.getElementById("root").appendChild(h2);
    document.getElementById("root"). appendChild(img);
  });
});