import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Tests with promises', () => {
    test('getHeroByIdAsync should return a Hero async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual(heroes[0]);
                done();
            });
    });

    test('Should return an error if the hero by id doesnt exist', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});