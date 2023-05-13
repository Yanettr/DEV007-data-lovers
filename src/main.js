import ghibli from './data/ghibli/ghibli.js';
//creación de nuevo objeto con map - definiendo las categorías - constante que guarda arreglo.
export const getFilmsData = () => {
  return ghibli.films.map(film => {
    return {
      title: film.title,
      poster: film.poster,
      description:film.description
    }
  });
};
