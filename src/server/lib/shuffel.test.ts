import { shuffle } from './shuffle';
import type { Draw } from './shuffle';

const validateShuffle = (shuffledList: Draw[], originalList:string[]) => {
  const givers = shuffledList.map( x => x.giver);
  const receivers = shuffledList.map( x => x.receiver);

  // Check: Nbr of results
  expect(shuffledList.length).toBe(originalList.length);

  // Check: No giver gets themself
  Array.from(
    { length: originalList.length},
    (_item, i) => expect(shuffledList[i]?.giver).not.toContain(shuffledList[i]?.receiver)
  );

  // Check: All values are present
  Array.from(
    { length: originalList.length},
    (_item, i) => expect(givers).toContain(originalList[i])
  );
  Array.from(
    { length: originalList.length},
    (_item, i) => expect(receivers).toContain(originalList[i])
  );
}

test('2 people - valid', () => {
  const list = ['Sara', 'Gina'];
  const copyList = ['Sara', 'Gina'];
  const shuffledList = shuffle(list);

  validateShuffle(shuffledList, copyList);
});

test('4 people - valid', () => {
  const list = ['Sara', 'Gina', 'Emma', 'Sadie'];
  const copyList = ['Sara', 'Gina', 'Emma', 'Sadie'];
  const shuffledList = shuffle(list);

  validateShuffle(shuffledList, copyList);
});

test('0 people - no shuffle', () => {
  expect(shuffle([]).length).toBe(0);
});

test('1 people - no shuffle', () => {
  expect(shuffle(['Emma']).length).toBe(0);
});

test('Null values filted out', () => {
  expect(shuffle(['Emma', 'Sadie', '']).length).toBe(2);
});

test('Non-unique entries - valid', () => {
  const list = ['Sara', 'Gina', 'Sara', 'Gina'];
  expect(shuffle(list).length).toBe(4);
});
