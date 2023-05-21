import { getFilmsData, anotherExample } from '../src/data.js';


  it('debería ser un objeto', () => {
    expect(typeof getFilmsByTitle).toBe('object');
  });

  describe('byNameFilms', ()=> {

    it ('deberia ser function', ()=>{
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
          "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg"
        },
        {
          "id": "45204234-adfd-45cb-a505-a8e7a676b114",
          "title": "My Neighbors the Yamadas",
          "description": "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
          "director": "Isao Takahata",
          "producer": "Toshio Suzuki",
          "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbors_the_Yamadas.jpg",
        },
      ];
      expect(getFilmsByTitle.byNameFilms(data, "My")).toStrictEqual(expectedResult);
    });

  });

});
