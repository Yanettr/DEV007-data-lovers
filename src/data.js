import ghibli from './data/ghibli/ghibli.js';

export const getFilmsData = () => {
  return ghibli.films.map(film => {
    return {
      title: film.title,
      poster: film.poster
    }
  });
};
