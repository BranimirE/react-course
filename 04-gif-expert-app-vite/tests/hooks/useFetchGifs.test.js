const { renderHook, waitFor } = require("@testing-library/react");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

describe('Tests in useFetchGifs hook', () => {
  test('should return the initial state', () => {
    const {result} = renderHook(() => useFetchGifs('One Punch'));
    const {images, isLoading} = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an images array and isLoading equal to false', async () => {
    const {result} = renderHook(() => useFetchGifs('One Punch'));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    const {images, isLoading} = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });

});
