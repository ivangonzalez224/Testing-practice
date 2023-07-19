const stringLength = require('./stringLength');

test('hello from microverse to error', () => {
    expect(stringLength('hello from microverse')).toBe('error');
  });
  