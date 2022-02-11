import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe('Tests in <FirstApp /> component', () => {
    test('Should show the greeting', () => {
        const greeting = 'Hello, I am Branimir';
        const { getByText } = render(<FirstApp greeting={greeting} />);
        expect(getByText(greeting)).toBeInTheDocument();
    });
});