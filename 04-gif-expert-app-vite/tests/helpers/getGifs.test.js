const { getGifs } = require("../../src/helpers/getGifs");

describe('Tests in getGifs', () => {
  test('should return a gifs array', async () => {
    const gifs = await getGifs('One Punch');
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    gifs.forEach(gif => {
      expect(gif).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
      });
    });
  });
});
