import { getFilmsData, getFilmsByProducer, getFilmsByTitle } from './data.js';
// declaración de variable que muestra el array de películas al cargar en DOM
let filmsData = getFilmsData();

filmsData.forEach(data => {
  const div = document.createElement('article');
  div.classList.add('card');
  const h2 = document.createElement('h2');
  const img = document.createElement('img');
  h2.textContent = data.title;
  img.src = data.poster;
  div.appendChild(h2)
  div.appendChild(img)

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
    const p = document.createElement('p');
    h2.textContent = data.title;
    img.src = data.poster;
    p.textContent = data.description;

    document.getElementById("root").appendChild(h2);
    document.getElementById("root"). appendChild(img);
    document.getElementById("root"). appendChild(p);
  });
});



const searchForm = document.querySelector('.searchForm');
searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();// Evita que se recargue la página al enviar el formulario
  const searchTerm = document.getElementById('searchFilm').value.toLowerCase();
  // Filtrar las películas que coincidan con la búsqueda
  const filteredFilms = getFilmsByTitle.byNameFilms(filmsData, searchTerm);
    // Llamar a la función para mostrar los resultados filtrados
  displayFilms(filteredFilms);
}

function displayFilms(films) {
  const rootElement = document.getElementById('root');
  rootElement.innerHTML = ''; // Limpiar el contenido anterior
  films.forEach(film => {
    const div = document.createElement('article');
    div.classList.add('card');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');
    h2.textContent = film.title;
    img.src = film.poster;
    p.textContent = film.description;

    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(p);
    rootElement.appendChild(div);
  });
}
