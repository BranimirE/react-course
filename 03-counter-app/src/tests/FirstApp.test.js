import { shallow } from 'enzyme';
import FirstApp from '../FirstApp';
//import { render } from "@testing-library/react";

describe('Tests in <FirstApp /> component', () => {
    test('Should show the greeting', () => {
        /* const greeting = 'Hello, I am Branimir';
        const { getByText } = render(<FirstApp greeting={greeting} />);
        expect(getByText(greeting)).toBeInTheDocument(); */
    });


    test('Should show <FirstApp /> correctly', () => {
        const greeting = 'Hello, I am Branimir';
        const wrapper = shallow(<FirstApp greeting={ greeting } />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show the text passed as prop', () => {
        const greeting = 'Hello, I am Branimir';
        const subTitle = 'This is a new subtitle';
        const wrapper = shallow(
            <FirstApp 
                greeting={ greeting } 
                subtitle={ subTitle }
            />);

        const h3Text = wrapper.find('h3').text();
        expect(h3Text).toBe(subTitle);
    });
});