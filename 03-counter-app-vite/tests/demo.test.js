describe('Tests on demo component', () => {
    test('This test should not fail', () => {
        // 1. Initialization
        const message1 = 'Hello world';
        // 2. Stimulus
        const message2 = message1.trim();
        // 3. Watch
        expect(message1).toBe(message2);

    });
});