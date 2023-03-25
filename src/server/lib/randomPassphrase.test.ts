import { expect, test } from 'vitest'
import { randomPassphrase } from './randomPassphrase';

test('Password is 5 characters', () => {
  const passphrase = randomPassphrase(['Gina']);
  expect(passphrase).toContain('gina');
  expect(passphrase.length).toBeGreaterThan(12);
});
