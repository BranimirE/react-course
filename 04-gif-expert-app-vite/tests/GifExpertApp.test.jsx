const { render, screen, fireEvent } = require("@testing-library/react");
const { GifExpertApp } = require("../src/GifExpertApp");

describe('Tests in GifExpertApp', () => {
  test('should match the snapshot', () => {
    render(<GifExpertApp />);
    expect(screen).toMatchSnapshot();
  });

  test('should add the new category to the screen after submit', () => {

    const newInputValue = 'Dragonball';
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: { value: newInputValue}});
    fireEvent.submit(form);
    // screen.debug();
    expect(screen.getByText(newInputValue)).toBeTruthy();

  });
});
