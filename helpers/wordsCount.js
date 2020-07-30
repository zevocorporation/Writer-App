exports.noOfWords = (value) => {
  const result = value
    .split('.')
    .filter((sentence) => sentence !== ' ')
    .map(
      (sentence) => sentence.split(' ').filter((word) => word !== '').length
    );

  let count = 0;
  result.forEach((item) => {
    count = count + item;
  });
  return count;
};
