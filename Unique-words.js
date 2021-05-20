const getUniqueWords = (unique) => {
  let arr = unique.split(' ');

  Array.from(new Set(unique));

  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  let uniquePhrase = result.join(' ');
  return uniquePhrase;
};

getUniqueWords('first things first easy come easy go');

export default getUniqueWords;
