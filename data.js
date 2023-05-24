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
      release_date: film.release_date,
      people: film.people,
      rt_score: film.rt_score,
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
    const filteredFilms = listOfFilms.filter(films => films.title.toLowerCase().includes(search));
    return filteredFilms;
  }
};

export const getFilmsInOrder = (order) => {
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
      }}
    return 0;
  });
  return orderedFilms;
};

export function computeStats(arrayData) {
  const percentage = {
    human: '0.0%',
    nonHuman: '0.0%',
    female: '0.0%',
    male: '0.0%',
    ratingAbove89: '0.0%',
    ratingBelow90: '0.0%',
  }

  let humanCounter = 0;
  let noHumanCounter = 0;
  let femaleCounter = 0;
  let maleCounter = 0;
  let ratingAbove89Counter = 0;
  let ratingBelow90Counter = 0;

  arrayData.forEach(film => {

    film.people.forEach(character => {
      if (character.specie === 'Human') {
        humanCounter = humanCounter +1;
      }
      else {
        noHumanCounter = noHumanCounter +1;
      }

      if (character.gender === 'Female') {
        femaleCounter = femaleCounter +1;
      }
      else {
        maleCounter = maleCounter +1;
      }
    });

    if (parseInt(film.rt_score) >= 90) {
      ratingAbove89Counter = ratingAbove89Counter +1;
    }
    else {
      ratingBelow90Counter = ratingBelow90Counter +1;
    }
  });

  const total = humanCounter + noHumanCounter;
  percentage.human = Math.round( ( humanCounter/total ) * 100) + '%';
  percentage.nonHuman = Math.round( ( noHumanCounter/total ) * 100) + '%';
  percentage.female = Math.round( ( femaleCounter/total ) * 100) + '%';
  percentage.male = Math.round( ( maleCounter/total ) * 100) + '%';

  percentage.ratingAbove89 = Math.round( ( ratingAbove89Counter/arrayData.length ) * 100) + '%';
  percentage.ratingBelow90 = Math.round( ( ratingBelow90Counter/arrayData.length ) * 100) + '%';

  return percentage;
}

