import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Test for the 05-funciones file', () => {
    test('getUser should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(user).toEqual(userTest);
    });
    test('getUserActivo must return an object', () => {
        const name = 'Branimir';
        const userTest = {
            uid: 'ABC567',
            username: name
        }
        const user = getUsuarioActivo(name);
        expect(user).toEqual(userTest);
    });
});