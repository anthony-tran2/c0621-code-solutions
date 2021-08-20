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

const filter = (array, predicate) => {
  const output = [];
  if (predicate === 'evenNumbers') {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        output.push(array[i]);
      }
    }
  } else if (predicate === 'overFive') {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 5) {
        output.push(array[i]);
      }
    }
  } else if (predicate === 'startsWithE') {
    for (let i = 0; i < array.length; i++) {
      if (array[i].startsWith('E')) {
        output.push(array[i]);
      }
    }
  } else if (predicate === 'haveD') {
    for (let i = 0; i < array.length; i++) {
      if (array[i].toLowerCase().includes('d')) {
        output.push(array[i]);
      }
    }
  } else return console.log('Invalid predicate try again');
  return output;
};
