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

  test('should call onAddCategory method if the input has value', () => {

    const inputValue = 'Saitama';
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory}/>);
    // screen.debug();
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target:{value: inputValue}});
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onAddCategory if the input is empty', async () => {
    const inputValue = '';
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);

    expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled();

  })

});
