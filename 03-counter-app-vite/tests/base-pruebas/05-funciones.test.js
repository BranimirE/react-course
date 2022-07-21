import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones.js";

describe('Tests on 05-funciones', () => {
    test('getUser should return an object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo should return an object', () => {
        const name = 'Branimir';
        const expectedResponse = {
            uid: 'ABC567',
            username: name
        };

        const activeUser = getUsuarioActivo(name);

        expect(activeUser).toEqual(expectedResponse);
    })
});