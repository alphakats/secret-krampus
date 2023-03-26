import { expect, test, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { randomPassphrase } from './randomPassphrase';

vi.mock('node:fs', () => ({
  readFileSync: vi.fn().mockImplementation(() => ' test {{noun}}\n tjo {{noun}}'),
}));
const mockReadFile = vi.mocked(readFileSync);

vi.mock('node:path', () => ({
  join: vi.fn().mockImplementation(() => 'url'),
}));
const mockJoin = vi.mocked(join);

test('Check Password content and length', () => {
  const input = 'Gina';
  const passphrase = randomPassphrase([input]);
  expect(passphrase).toContain(input.toLowerCase());
  expect(passphrase.length).toBeGreaterThan(input.length);
});
