const newNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const newNames = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers2 = input => { if (input % 2) return true; };
const overFive2 = input => { if (input > 5) return true; };
const StartWithE2 = input => { if (input.startsWith('E')) return true; };
const haveD2 = input => { if (input.toLowerCase().includes('d')) return true; };

const filter = (array, predicate) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
};
