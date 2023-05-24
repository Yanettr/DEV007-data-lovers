import { getFilmsByTitle, computeStats, getFilmsData, getFilmsByProducer, getFilmsInOrder } from '../src/data.js';

const data = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "rt_score": "95",
    "people": [
      {
        "name": "Lusheeta Toel Ul Laputa",
        "gender": "Female",
        "specie": "Human"
      },
      {
        "name": "Dola",
        "gender": "Female",
        "specie": "Human"
      },
    ],
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "rt_score": "92",
    "people": [
      {
        "name": "Henri",
        "gender": "Male",
        "specie": "Human"
      },
      {
        "name": "Motro",
        "gender": "Male",
        "specie": "Human"
      },
    ],
  },
  {
    "id": "45204234-adfd-45cb-a505-a8e7a676b114",
    "title": "My Neighbors the Yamadas",
    "description": "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbors_the_Yamadas.jpg",
    "rt_score": "80",
    "people": [
      {
        "name": "Kiki",
        "gender": "Female",
        "specie": "Witch"
      },
      {
        "name": "Catbus",
        "gender": "Male",
        "specie": "Cat"
      }
    ],
  },
];

describe('getFilmsByTitle', () => {

  it('debería ser un objeto', () => {
    expect(typeof getFilmsByTitle).toBe('object');
  });

  describe('byNameFilms', () => {

    it('deberia ser function', () => {
      expect(typeof getFilmsByTitle.byNameFilms).toBe('function');
    })

    it("debería retornar un array vacio cuando no encuentra coincidencias", () => {
      const expectedResult = [];
      expect(getFilmsByTitle.byNameFilms(data, "Alicia")).toStrictEqual(expectedResult);
    });

    it("debería retornar un array con films cuando encuentra coincidencias", () => {
      const expectedResult = [
        {
          "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
          "title": "My Neighbor Totoro",
          "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
          "director": "Hayao Miyazaki",
          "producer": "Hayao Miyazaki",
          "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
          "rt_score": "92",
          "people": [
            {
              "name": "Henri",
              "gender": "Male",
              "specie": "Human"
            },
            {
              "name": "Motro",
              "gender": "Male",
              "specie": "Human"
            },
          ],
        },
        {
          "id": "45204234-adfd-45cb-a505-a8e7a676b114",
          "title": "My Neighbors the Yamadas",
          "description": "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
          "director": "Isao Takahata",
          "producer": "Toshio Suzuki",
          "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbors_the_Yamadas.jpg",
          "rt_score": "80",
          "people": [
            {
              "name": "Kiki",
              "gender": "Female",
              "specie": "Witch"
            },
            {
              "name": "Catbus",
              "gender": "Male",
              "specie": "Cat"
            }
          ],
        },
      ];
      expect(getFilmsByTitle.byNameFilms(data, "My")).toStrictEqual(expectedResult);
    });
  });
});

describe('computeStats', () => {
  it('debería ser una function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('deberia retornar los porcentajes de personajes femeninos y masculinos', () => {
    const expectedResult = {
      human: '67%',
      nonHuman: '33%',
      female: '50%',
      male: '50%',
      ratingAbove89: '67%',
      ratingBelow90: '33%',
    }
    expect(computeStats(data)).toEqual(expectedResult);
  });
});

describe('Test para la funcion getFilmsData', () => {
  it('Es una funcion que trae los valores especificados', () => {
    expect(typeof getFilmsData).toBe('function');
  });

  it('la funcion getFilmsData Debe devolver un arreglo de objetos con datos de películas', () => {
    const filmsData = {
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986"
    };
    expect(getFilmsData()).toEqual(expect.arrayContaining([expect.objectContaining(filmsData)]));
  });
});

describe('getFilmsByProducer', () => {
  it('Es una funcion para filtrar por productores', () => {
    expect(typeof getFilmsByProducer).toBe('function');
  });

  it('La funcion getFilmsByProducer solo debe retornar las peliculas del productor elegido', () => {
    const filmsData = {
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986"
    };
    expect(getFilmsByProducer("Isao Takahata")).toContainEqual(filmsData);
  });
  it('La funcion getFilmsByProducer devuelve un array con las peliculas del productor escogido', () => {
    //expect(typeof getFilmsByProducer("Isao Takahata")).toEqual('Array');
    expect(typeof getFilmsByProducer("Isao Takahata")).toEqual('object');
  });
});

describe('getFilmsInOrder', () => {
  it('Es una funcion para ordenar alfabeticamente las peliculas', () => {
    expect(typeof getFilmsInOrder).toBe('function');
  });

  it('La funcion getFilmsInOrder debe ordenar las peliculas de la A-Z', () => {
    const orderedFilms = getFilmsInOrder("A-Z");
    const titleFirstFilm = orderedFilms[0].title;
    const titleLastFilm = orderedFilms[orderedFilms.length - 1].title;
    expect(titleFirstFilm).toBe("Castle in the Sky");
    expect(titleLastFilm).toBe("Whisper of the Heart");
  });
  it('La funcion getFilmsInOrder debe ordenar las peliculas de la Z-A', () => {
    const orderedFilms = getFilmsInOrder("Z-A");
    const titleFirstFilm = orderedFilms[0].title;
    const titleLastFilm = orderedFilms[orderedFilms.length - 1].title;
    expect(titleFirstFilm).toBe("Whisper of the Heart");
    expect(titleLastFilm).toBe("Castle in the Sky");
  });
});





