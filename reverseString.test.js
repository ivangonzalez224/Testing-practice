const reverseString = require('./reverseString');

test('hello to olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
  });