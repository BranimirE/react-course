import { shallow } from 'enzyme';
import Counter from '../Counter';
describe('Tests in Counter component', () => {
    let wrapper = shallow(<Counter />);

    beforeEach(() => {
        wrapper = shallow(<Counter />);
    });

    test('Should show <Counter /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show 100 as default value', () => {
        const startValue = 100;
        const wrapper = shallow(<Counter start={startValue}/>);
        const defaultStart = wrapper.find('h2').text().trim();
        expect(defaultStart).toBe(startValue + '');
    });

    test('should increase the value using +1 button', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11')
    });

    test('should decrease the value using -1 button', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9')
    });

    test('should reset the value when we click on reset button', () => {
        const startValue = 100;
        const wrapper = shallow(<Counter start={startValue}/>);
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        //reset click
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(`${startValue}`);
    });
});
