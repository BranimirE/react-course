

describe('Tests on the demo.test.js file', () => {

    test ('This must return true', () => {
        const isActive = true;
        if (!isActive) {
            throw new Error('The use is not active');
        }
    });

    test('Strings should be equal', () => {
        const message1 = 'Hello world';
        const message2 = `Hello world`;
        expect(message1).toBe(message2);
    });
});