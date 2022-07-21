import {getSaludo} from "../../src/base-pruebas/02-template-string.js";

describe('tests in 02-template-string', () => {
   test('getSaludo should return "Hola Branimir"', () => {
      const name = 'Branimir';
      const message = getSaludo(name);

      expect(message).toBe(`Hola ${name}`);
   });
});