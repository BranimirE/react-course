const { render, screen, fireEvent } = require("@testing-library/react");
const { CounterApp } = require("../src/CounterApp");

describe('Tests in CounterApp', () => {
  const initialValue = 120;
  test('should match the snapshot', () => {
    const {container} = render(<CounterApp value={initialValue}/> );
    expect(container).toMatchSnapshot();
  });

  test('should show the initial value', () => {
    render(<CounterApp value={initialValue}/> );
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test('should increase with +1 button', () => {
    render(<CounterApp value={initialValue}/> );
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test('should decrease with -1 button', () => {
    render(<CounterApp value={initialValue}/> );
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test('should reset the value with reset button click', () => {
    render(<CounterApp value={initialValue}/> );
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    expect(screen.getByText(initialValue)).toBeTruthy();
  })

})
