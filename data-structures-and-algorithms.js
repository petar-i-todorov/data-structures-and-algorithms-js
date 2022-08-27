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

//Euclid algorithm for finding GCD of 2 numbers (without recursion)
const GCD = (num1, num2) => {
  while (num1 !== num2) {
    let max = num1 > num2 ? num1 : num2;
    let min = num1 > num2 ? num2 : num1;
    max -= min;
    num1 = max;
    num2 = min;
  }
  return num1;
};

//with recursion
function gcdSimple(a, b) {
  if (a === b) return b;
  const max = a > b ? a : b;
  const min = a > b ? b : a;
  return gcdSimple(min, max - min);
}

//with recursion - best complexity version - O(const)
function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

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

//Hash Tables
function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  table = new Array(3333);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      // resize
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }

    // O(n)
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}
