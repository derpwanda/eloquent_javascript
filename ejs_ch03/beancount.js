const countBs = function (string) {
  let count = 0;
  for (value in string) {
    if (string[value] == "B") {
      count++;
      // console.log(count)
    }
  }
  return count;
};

const countChar = function (string, element) {
  let count = 0;

  for (value in string) {
      if (string[value] == element) {
          count++;
      }
  }
  return count;
};

module.exports = {countBs, countChar}
// module.exports = beancount
