// //binary search - O(log n)
// const binarySearch = (array, searchedElement) => {
//   let start = 0;
//   let end = array.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (array[mid] === searchedElement) return true;
//     else if (searchedElement > array[mid]) start = mid + 1;
//     else if (searchedElement < array[mid]) end = mid - 1;
//   }
//   return false;
// };

// //selection sort - O(n^2)
// const selectionSort = (array) => {
//   const arrayToReturn = [];
//   while (array.length) {
//     let max = array[0];
//     array.forEach((el) => {
//       if (el > max) {
//         max = el;
//       }
//     });
//     array = array.filter((el) => el !== max);
//     arrayToReturn.unshift(max);
//   }
//   return arrayToReturn;
// };

// //Euclid algorithm for finding GCD of 2 numbers (without recursion)
// const GCD = (num1, num2) => {
//   while (num1 !== num2) {
//     let max = num1 > num2 ? num1 : num2;
//     let min = num1 > num2 ? num2 : num1;
//     max -= min;
//     num1 = max;
//     num2 = min;
//   }
//   return num1;
// };

// //with recursion
// function gcdSimple(a, b) {
//   if (a === b) return b;
//   const max = a > b ? a : b;
//   const min = a > b ? b : a;
//   return gcdSimple(min, max - min);
// }

// //with recursion - best complexity version - O(const)
// function gcd(a, b) {
//   if (a === 0) {
//     return b;
//   }
//   if (b === 0) {
//     return a;
//   }
//   return gcd(b, a % b);
// }

// //Quicksort - worst case - O(n^2), average case - O(n*log n) - depending on the pivot
// function quickSort(arr) {
//   let pivot;
//   if (arr.length < 2) {
//     return arr;
//   }
//   if (arr.length > 2) {
//     const first = arr[0];
//     const last = arr[arr.length - 1];
//     const middle = arr[Math.round(arr.length - 1)];
//     const max = Math.max(first, last, middle);
//     const min = Math.min(first, last, middle);
//     pivot = first + last + middle - max - min; //median
//   } else {
//     pivot = arr[0];
//   }

//   let left = [];
//   let right = [];

//   for (let val of arr) {
//     if (val < pivot) {
//       left.push(val);
//     } else if (val > pivot) {
//       right.push(val);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// //hash tables
// const hashFunction = (key, tableSize) => {
//   let hash = 15;

//   for (let i = 0; i < key.length; i++) {
//     hash = (hash * 19 * key.charCodeAt(i)) % tableSize;
//   }
//   return hash;
// };

// class HashTable {
//   table = new Array(2003);
//   itemsCount = 0;

//   _resize = () => {
//     const newTable = new Array(this.table.length * 2);
//     this.table.forEach((place) => {
//       if (place) {
//         place.forEach((pair) => {
//           const idx = hashFunction(pair[0], newTable.length);
//           if (!newTable[idx]) {
//             newTable[idx] = [pair];
//           } else {
//             newTable[idx].push(pair);
//           }
//         });
//       }
//     });
//     this.table = newTable;
//   };

//   set = (key, value) => {
//     this.itemsCount++;
//     const loadFactor = this.itemsCount / this.table.length;
//     if (loadFactor >= 0.8) {
//       this._resize();
//     }
//     const idx = _hash(key, this.table.length);
//     if (!this.table[idx]) {
//       this.table[idx] = [[key, value]];
//     } else {
//       this.table[idx].push([key, value]);
//     }
//   };
//   get = (key) => {
//     const idx = hashFunction(key, this.table.length);
//     if (!this.table[idx]) {
//       return null;
//     }
//     return this.table[idx].find((pair) => pair[0] === key)[1];
//   };
// }

// const hashTable = new HashTable();
// hashTable.set("dog", "Cody");
// hashTable.set("god", "Zeus");
// console.log(hashTable.get("dog"));
// console.log(hashTable.get("god"));
//worst case of operations with the data - O(n) - depending on the count of collisions. Better hash function = less collisions = less complexity
//average case - O(1) if we choose the right algorithm for the hash function

//Graphs. Breadth-first search

const hashFunction = (key, tableSize) => {
  let hash = 15;
  for (let i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize;
  }
  return hash;
};

class HashTable {
  table = new Array(3000);
  set = (key, value) => {
    const idx = hashFunction(key, this.table.length);
    if (!this.table[idx]) {
      this.table[idx] = [[key, value]];
    } else {
      this.table[idx].push([key, value]);
    }
  };
  get = (key) => {
    const idx = hashFunction(key, this.table.length);
    return this.table[idx].find((el) => el[0] === key)[1];
  };
}
const hashTable = new HashTable(); // = graph
hashTable.set("id", "sg");
hashTable.set("id", "ph");
hashTable.set("id", "my");
hashTable.set("my", "kh");
hashTable.set("my", "sg");
hashTable.set("kh", "cn");
function breadthFirstSearch(rootKey, table, searchedValue) {
  const queue = [rootKey];
  const visited = [];

  while (queue.length > 0) {
    if (queue[0] === searchedValue) {
      return queue[0];
    }
    const idx = hashFunction(queue[0], table.length);
    // add all child nodes to queue
    if (table[idx]) {
      //if condition because not all countries are included as indexes. For example ph in this case is a value of a key but it's not a key itself and it's not reserving an index in the array for itself
      table[idx]
        .filter((pair) => pair[0] === queue[0])
        .forEach((pair) => {
          if (!visited.find((country) => country === pair[1])) {
            queue.push(pair[1]);
          }
        });
    }

    // remove element that we just searched
    visited.unshift(queue.shift());
    console.log("queue after shifting: " + queue);
  }

  // didn't find a value in the graph
  return null;
}
console.log(breadthFirstSearch("id", hashTable.table, "cn"));
