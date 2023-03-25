import { randomPassphrase } from './randomPassphrase';

test('Password is 5 characters', () => {
  expect(randomPassphrase().length).toBe(6);
});
