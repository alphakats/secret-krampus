import { randomPassphrase } from './randomPassphrase';

test('Password is 6 characters', () => {
  expect(randomPassphrase().length).toBe(5);
});
