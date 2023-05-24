import { getFilmsData, getFilmsByProducer, getFilmsByTitle, getFilmsInOrder, computeStats } from './data.js';
// declaración de variable que muestra el array de películas al cargar en DOM
const filmsData = getFilmsData();
loadInitialData();

const selectProducer = document.getElementById('selectProducer');
selectProducer.addEventListener('change', (event) => {
  const selectedProducer = event.target.value;
  const filteredFilms = getFilmsByProducer(selectedProducer);
  document.getElementById("root").textContent = "";
  filteredFilms.forEach(data => {
    const div = document.createElement('article');
    div.classList.add('card');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const ins = document.createElement('ins');
    const strong = document.createElement('strong');
    const em = document.createElement('em');
    const p = document.createElement('p');
    h2.textContent = data.title;
    img.src = data.poster;
    ins.textContent = "Producer: " + data.producer;
    strong.textContent = "Director: " + data.director;
    em.textContent = "Release Date: " + data.release_date;
    p.textContent = "Description: " + data.description;
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(ins);
    div.appendChild(strong);
    div.appendChild(em);
    div.appendChild(p);
    document.getElementById("root"). appendChild(div);
  });
});

const searchFilmInput = document.getElementById('searchFilmInput');
searchFilmInput.addEventListener('input', handleSearch);

function handleSearch() {
  // Filtrar las películas que coincidan con la búsqueda
  const filteredFilms = getFilmsByTitle.byNameFilms(filmsData, searchFilmInput.value);
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

const selectOrder = document.getElementById('selectOrder');
selectOrder.addEventListener('change', (event) => {
  const orderedTitles = event.target.value;
  const orderedFilms = getFilmsInOrder(orderedTitles);
  document.getElementById("root").textContent = "";

  orderedFilms.forEach(film => {
    const div = document.createElement('article');
    div.classList.add('card');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    h2.textContent = film.title;
    img.src = film.poster;
    div.appendChild(h2);
    div.appendChild(img);
    document.getElementById("root").appendChild(div);
  });
});

const homeBtn = document.getElementById('btnHome');
homeBtn.addEventListener('click', () => {
  document.getElementById("root").textContent = "";
  loadInitialData();
});

function loadInitialData(){
  console.log(document.getElementById("root"));

  filmsData.forEach(data => {
    const div = document.createElement('article');
    div.classList.add('card');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    h2.textContent = data.title;
    img.src = data.poster;
    div.appendChild(h2);
    div.appendChild(img);
    document.getElementById("root").appendChild(div);
  });
}

const curiositiesBtn = document.getElementById('btnCuriosities');
curiositiesBtn.addEventListener('click', () => {
  document.getElementById("root").textContent = "";
  // mostrar estadisticas
  const data = computeStats(filmsData);
  stadistics(data);
});

//funcion de estadistica y creacion de etiquetas html para la publicacion de datos en la web
function stadistics(films) {

  const rootElement = document.getElementById('root');
  rootElement.innerHTML = ''; // Limpiar el contenido anterior

  const articleContenedor = document.createElement('article');
  articleContenedor.classList.add('articleContenedor');

  const h2TitleFirst = document.createElement('h2');
  h2TitleFirst.classList.add('h2TitleFirst');
  h2TitleFirst.textContent = 'Curious Facts about the Films of Studio Ghibli'
  const divGender = document.createElement('div');
  divGender.classList.add('divGender');
  const pGender = document.createElement('p');
  const spanMale = document.createElement('span');
  spanMale.textContent = films.male;
  const spanFemale = document.createElement('span');
  spanFemale.textContent = films.female;
  pGender.innerHTML = `Did you know that in the characters of Studio Ghibli films,  ${spanMale.textContent} are male  characters, and ${spanFemale.textContent} are female  characters.`;

  const divCharacters = document.createElement('div');
  divCharacters.classList.add('divCharacters');
  const pCharacters = document.createElement('p');
  const spanHuman = document.createElement('span');
  spanHuman.textContent = films.human;
  const spanNoHuman = document.createElement('span');
  spanNoHuman.textContent = films.nonHuman;
  pCharacters.innerHTML = `In Studio Ghibli films, ${spanHuman.textContent}, of the characters are humans, while only  ${spanNoHuman.textContent} are non-human characters represented by animals and fantastical creatures.`;

  const divAverage = document.createElement('div');
  divAverage.classList.add('divAverage');
  const pAverage = document.createElement('p');
  const spanHighRating = document.createElement('span');
  spanHighRating.textContent = films.ratingBelow90;
  const spanLowRating = document.createElement('span');
  spanLowRating.textContent = films.ratingAbove89;
  pAverage.innerHTML = `Ghibli films have achieved a record level of acceptance and high ratings in most countries.   ${spanHighRating.textContent} of them have received ratings ranging from 89 to 100%, which is a rare achievement for anime production companies, while  ${spanLowRating.textContent} have received ratings from 0 to 88%.` ;

  divGender.appendChild(pGender);
  divCharacters.appendChild(pCharacters);
  divAverage.appendChild(pAverage); 
  articleContenedor.appendChild(h2TitleFirst);
  articleContenedor.appendChild(divGender);
  articleContenedor.appendChild(divCharacters);
  articleContenedor.appendChild(divAverage);
  rootElement.appendChild(articleContenedor);
}
