//binary search - O(log n)
const binarySearch = (array, searchedElement) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === searchedElement) return true;
    else if (searchedElement > array[mid]) start = mid + 1;
    else if (searchedElement < array[mid]) end = mid - 1;
  }
  return false;
};
