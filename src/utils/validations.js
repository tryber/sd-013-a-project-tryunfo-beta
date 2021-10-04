export const validateNames = (arr) => arr.every((str) => str !== '');

export const validateNumbers = (arr) => {
  const MAX_NUMBER = 90;
  const MIN_NUMBER = 0;
  return arr
    .every((number) => Number(number) >= MIN_NUMBER
                    && Number(number) <= MAX_NUMBER);
};

export const validateSum = (arr) => {
  const MAX_SUM = 210;
  const sum = arr.reduce((acc, crr) => {
    const value = Number(acc) + Number(crr);
    return value;
  }, 0);
  return sum <= MAX_SUM;
};
