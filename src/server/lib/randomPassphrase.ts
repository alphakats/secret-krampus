import { sentence, setTemplates, getTemplates } from 'txtgen';

const templates = [
  ' is a {{adjective}} {{noun}}',
  ' loves {{nouns}}',
  ' collects {{a_noun}}',
];

export const randomPassphrase = (names: string[]): string => {
  setTemplates(templates);

  const name = names[Math.floor(Math.random() * names.length)];
  const text = name + sentence()
    .replace(/[.?]/g, '')
    .split(' ')
    .join('-');

  return text.toLowerCase();
};

export default randomPassphrase;
