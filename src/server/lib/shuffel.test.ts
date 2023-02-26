import shuffle from './shuffle';

test('REMOVE ME', () => {
  expect(shuffle([]).length).toBe(0);
});

// TODO: implement
test.skip('Test with 2 people', () => {
  const list = ['Sara', 'Gina'];

  expect(shuffle(list).length).toBe(list.length);
  expect(shuffle(list)).toContain('Sara');
  expect(shuffle(list)).toContain('Gina');
})