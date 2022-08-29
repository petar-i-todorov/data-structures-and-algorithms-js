// Graphs. Breadth-first search

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
// complexity - O(V + E)
