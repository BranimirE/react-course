import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp.js";

describe('Tests in 08-imp-exp', () => {
    test('getHeroById should return an hero by ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroById should return undefined if the hero doesnt exist', () => {
        const id = 100;
        const hero = getHeroeById(id);
        //expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner should return 3 heroes from DC', () => {
        const heroes = getHeroesByOwner('DC');
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(    [{
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);
    });
    test('getHeroesByOwner should return 2 heroes from Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter(hero => hero.owner === owner));
    });

});