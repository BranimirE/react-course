const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock("../../src/hooks/useFetchGifs");
describe('Tests in GifGrid', () => {

  const category = 'Saitama';
  test('should initially show the loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });
    render(<GifGrid category={category}/>);
    // screen.debug();

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('should show the images when useFetchGifs returns', () => {
    // render(<GifGrid category={category}/>);
    const gifs = [{
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      }, {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      }];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category}/>);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(gifs.length);

  });
});
