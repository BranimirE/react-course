import { type } from "@testing-library/user-event/dist/type";
import { retornaArreglo } from "../../base/07-deses-arr";

describe('Tests for destructuring arrays', () => {
    test('It must return an array', () => {
        //const arr = retornaArreglo();
        //expect(arr).toEqual(['ABC', 123]);
        const [ letters, numbers ] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');
        
        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    });
});