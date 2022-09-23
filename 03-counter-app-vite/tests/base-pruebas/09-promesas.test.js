import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';
describe('Tests in 09-promesas', () => { 
  test('getHeroByIdAsync should return a hero', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        })
        done();
      });
  });
  test('getHeroByIdAsync should return error when the hero is not found', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch(error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      })
  });
})
