import { expect, test, vi } from 'vitest';
import { readFile } from 'node:fs';

import { randomPassphrase } from './randomPassphrase';

vi.mock('node:fs', () => ({
  readFile: vi.fn().mockImplementation(() => 'test {{noun}}'),
}));

const mockReadFile = vi.mocked(readFile);

test('Check Password content and length', () => {
  const input = 'Gina';
  const passphrase = randomPassphrase([input]);
  expect(passphrase).toContain(input.toLowerCase());
  expect(passphrase.length).toBeGreaterThan(input.length);
});
