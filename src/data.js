import ghibli from './data/ghibli/ghibli.js';

//creación de nuevo objeto con map - definiendo las categorías - constante que guarda arreglo.
export const getFilmsData = () => {
  return ghibli.films.map(film => {
    return {
      title: film.title,
      poster: film.poster,
      description:film.description,
      producer: film.producer,
      director: film.director,
      release_date: film.release_date
    }
  });
};

//función de filtrar por productor
export const getFilmsByProducer = (producer) => {
  if (producer === 'all') {
    return getFilmsData(); 
  } else {
    return ghibli.films.filter(film => film.producer === producer).map(film => {
      return {
        title: film.title,
        poster: film.poster,
        description:film.description,
        producer: film.producer,
        director: film.director,
        release_date: film.release_date
      }
    });
  }
};

//función de filtrar por film para el buscador
export const getFilmsByTitle = {
  byNameFilms: (listOfFilms, nameFilms) => {
    const search = nameFilms.toLowerCase();
    const filteredFilms = listOfFilms.filter(films => films.title.toLowerCase().startsWith(search));
    return filteredFilms;
  }
};

export const getFilmsInOrder = (order) => {
  console.log(order);
  const orderedFilms = ghibli.films.slice();
  orderedFilms.sort((a,b) => { 
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
      if (order === "Z-A") { 
        if (titleA > titleB) {
          return -1;
        }
        else if (titleA < titleB) {
          return 1;
        }}
      else if (order === "A-Z"){ 
        if (titleA < titleB) {
          return -1;
        }
        else if (titleA > titleB) {
          return 1;
        }};
        return 0;
      });
    return orderedFilms;  
  };  




