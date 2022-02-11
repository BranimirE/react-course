import { getSaludo } from "../../base/02-template-string";

describe('Tests in 02-template-string.tests.js', () => {

    test('getSaludo must return Hola Branimir !', () => {
        const name = 'Branimir';
        const greeting = getSaludo(name);
        expect(greeting).toBe('Hola ' + name + '!');
        //console.log(greeting);
    });

    test('getSaludo must return Hola Robert ! if it is not passed a parameter', () => {
        const greeting = getSaludo();
        expect(greeting).toBe('Hola Robert!');
        //console.log(greeting);
    });

});