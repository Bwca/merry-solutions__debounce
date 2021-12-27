import { debounce } from './debounce.function';

jest.useFakeTimers();

describe('Tests for debounce function', () => {
  const fn = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('The function should be called only once', () => {
    // Arrange
    const [debouncedFn] = debounce(fn, 10);

    // Act
    for (let x = 0; x < 10; x++) {
      debouncedFn();
    }
    jest.runAllTimers();

    // Assert
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('The function should be called 5 times in 500ms with 500 calls', () => {
    // Arrange
    const [debouncedFn] = debounce(fn, 10);

    // Act
    for (let i = 0; i < 5; i++) {
      for (let x = 0; x < 100; x++) {
        debouncedFn();
      }
      jest.advanceTimersByTime(100);
    }

    // Assert
    expect(fn).toHaveBeenCalledTimes(5);
  });

  it('The function should be called 4 times in 500ms with 500 calls when cancelled before the last call', () => {
    // Arrange
    const [debouncedFn, cancel] = debounce(fn, 10);

    // Act
    for (let i = 0; i < 5; i++) {
      for (let x = 0; x < 100; x++) {
        debouncedFn();
      }
      if (i === 4) {
        cancel();
      }
      jest.advanceTimersByTime(100);
    }

    // Assert
    expect(fn).toHaveBeenCalledTimes(4);
  });
});
