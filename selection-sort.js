//selection sort - O(n^2)
const selectionSort = (array) => {
  const arrayToReturn = [];
  while (array.length) {
    let max = array[0];
    array.forEach((el) => {
      if (el > max) {
        max = el;
      }
    });
    array = array.filter((el) => el !== max);
    arrayToReturn.unshift(max);
  }
  return arrayToReturn;
};
