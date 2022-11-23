const { render, screen, fireEvent } = require("@testing-library/react");
const { AddCategory } = require("../../src/components");

describe('Test in AddCategory component', () => {
  test('should change the textbox value', () => {
    render(<AddCategory onAddCategory={() => {}}/>);
    // screen.debug();
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target:{value: 'Saitama'}});

    expect(input.value).toBe('Saitama');
  });
  test('should call onAddCategory methods', () => {

    const inputValue = 'Saitama';
    render(<AddCategory onAddCategory={() => {}}/>);
    // screen.debug();
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target:{value: inputValue}});
    fireEvent.submit(form);

    expect(input.value).toBe('');
  });

});
