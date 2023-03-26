import { sentence, setTemplates } from 'txtgen';
import { readFile } from 'fs';

const TEMPLATE_PATH = 'src/server/lib/secretdir/templates.txt';

const myTemplates = (path: string): string[] => {
  const data = readFile(path, 'utf8', (err, data) => {
    if (err) {
      return;
    }
    return data
    .split('\n')
    .filter(n => n)
  });

  if (data) {
    return data;
  } else {
    throw "Error reading file";
  }
};

export const randomPassphrase = (names: string[]): string => {
  const templates: string[] = myTemplates(TEMPLATE_PATH);
  setTemplates(['{{noun}}']);

  const name = names[Math.floor(Math.random() * names.length)];
  const text = name + sentence()
    .replace(/[.?]/g, '')
    .split(' ')
    .join('-');

  return text.toLowerCase();
};

export default randomPassphrase;
