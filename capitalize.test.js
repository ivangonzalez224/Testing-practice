const capitalize = require('./capitalize');

test('developer to Developer', () => {
    expect(capitalize('developer')).toBe('Developer');
  });