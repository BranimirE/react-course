describe('Tests for the demo.test.js file', () => {
    test('The strings should be equal', () => {
        // 1. Initialization
        const message1 = 'Hola mundo';

        // 2. Estimulo
        const message2 = `Hola mundo`;

        expect(message1).toBe(message2);
    });
});