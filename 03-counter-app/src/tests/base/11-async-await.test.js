import { getImagen } from "../../base/11-async-await.mjs";

describe('Tests with async/await and fetch', () => {
    test('Should return the bearer token', async () => {
        const tokenBody = await getImagen();
        expect(typeof tokenBody).toBe('object');
        
    });
});