// TODO: Generate cool sentences
export const randomPassphrase = (): string => {
  return (Math.random() + 1).toString(36).substring(7);
};

export default randomPassphrase;
