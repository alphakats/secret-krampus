import { sentence, setTemplates } from 'txtgen';
import { readFileSync } from 'fs';
import { join } from 'path';

const TEMPLATE_FILE = 'resources/templates.txt';

const myFile = (url: string): string[] => {
  const data = readFileSync(join(process.cwd(), url), 'utf8');

  if (data) {
    return data
      .split('\n')
      .filter(n => n)
  } else {
    throw "Can not read file";
  }
};

export const randomPassphrase = (names: string[]): string => {
  const templates: string[] = myFile(TEMPLATE_FILE);
  setTemplates(templates);

  const name = names[Math.floor(Math.random() * names.length)];
  const text = name + sentence()
    .replace(/[.?]/g, '')
    .split(' ')
    .join('-');

  return text.toLowerCase();
};

export default randomPassphrase;
