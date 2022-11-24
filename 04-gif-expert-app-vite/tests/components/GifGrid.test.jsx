const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components");

describe('Tests in GifGrid', () => {
  const category = 'Saitama';
  test('should initially show the loading', () => {
    render(<GifGrid category={category}/>);
    // screen.debug();

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('should show the images when useFetchGifs returns', () => {
    
  });
});
