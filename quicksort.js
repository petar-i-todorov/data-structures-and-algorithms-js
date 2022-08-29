//Quicksort - worst case - O(n^2), average case - O(n*log n) - depending on the pivot
function quickSort(arr) {
  let pivot;
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length > 2) {
    const first = arr[0];
    const last = arr[arr.length - 1];
    const middle = arr[Math.round(arr.length - 1)];
    const max = Math.max(first, last, middle);
    const min = Math.min(first, last, middle);
    pivot = first + last + middle - max - min; //median
  } else {
    pivot = arr[0];
  }

  let left = [];
  let right = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
