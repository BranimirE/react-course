import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes'
describe('Tests for imports exports functions', () => {
    test('Should return a hero by id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        const heroData = heroes.find(h => h.id === id );

        expect(hero).toEqual(heroData);
    });

    test('Should return undefined if the hero doesn\'t exist', () => {
        const id = 10;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);
    });

    test('Should return DC\'s heroes', () => {
        const owner = 'DC';
        const response = getHeroesByOwner(owner);

        expect(response).toEqual(heroes.filter(h => h.owner === owner));
    });

    test('Should return 2 on Marvel\s query length', () => {
        const owner = 'Marvel';
        const response = getHeroesByOwner(owner).length;

        expect(response).toBe(heroes.reduce((sum, h) => ((h.owner === owner)?sum+1:sum), 0));
    });
});