const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components");

describe('Tests in GifItem', () => {
  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg';

  test('Should match the snapshot', () => {
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the image with the url', () => {
    render(<GifItem title={title} url={url} /> );
    // screen.debug();
    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show the title', () => {
    render(<GifItem title={title} url={url} /> );
    expect(screen.getByText(title)).toBeTruthy();
  });
});
