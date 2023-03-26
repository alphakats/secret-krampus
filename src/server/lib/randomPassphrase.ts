import { sentence, setTemplates } from 'txtgen';
import { readFileSync } from 'fs';
import { join } from 'path';

const TEMPLATE_PATH = 'resources/templates.txt';

const myTemplates = (url: string): string[] => {
  const data = readFileSync(join(process.cwd(), url), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return err;
    }
    return data
      .split('\n')
      .filter(n => n)
  });

  if (data) {
    return data;
  } else {
    throw 'Error reading file';
  }
};

export const randomPassphrase = (names: string[]): string => {
  const templates: string[] = myTemplates(TEMPLATE_PATH);
  setTemplates([templates]);

  const name = names[Math.floor(Math.random() * names.length)];
  const text = name + sentence()
    .replace(/[.?]/g, '')
    .split(' ')
    .join('-');

  return text.toLowerCase();
};

export default randomPassphrase;
