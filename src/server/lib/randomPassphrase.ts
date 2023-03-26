import { sentence, setTemplates } from 'txtgen';
import { readFile } from 'fs';

const TEMPLATE_PATH = 'secretdir/templates.txt';

const myTemplates = (path: string): string[] => {
  return readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    return data
      .split('\n')
      .filter(n => n)
  });
};

export const randomPassphrase = (names: string[]): string => {
  // TODO: Throw error
  const templates: string[] = myTemplates(TEMPLATE_PATH);
  setTemplates(templates);

  const name = names[Math.floor(Math.random() * names.length)];
  const text = name + sentence()
    .replace(/[.?]/g, '')
    .split(' ')
    .join('-');

  return text.toLowerCase();
};

export default randomPassphrase;
