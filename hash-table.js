//hash table
const hashFunction = (key, tableSize) => {
  let hash = 15;

  for (let i = 0; i < key.length; i++) {
    hash = (hash * 19 * key.charCodeAt(i)) % tableSize;
  }
  return hash;
};

class HashTable {
  table = new Array(2003);
  itemsCount = 0;

  _resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((place) => {
      if (place) {
        place.forEach((pair) => {
          const idx = hashFunction(pair[0], newTable.length);
          if (!newTable[idx]) {
            newTable[idx] = [pair];
          } else {
            newTable[idx].push(pair);
          }
        });
      }
    });
    this.table = newTable;
  };

  set = (key, value) => {
    this.itemsCount++;
    const loadFactor = this.itemsCount / this.table.length;
    if (loadFactor >= 0.8) {
      this._resize();
    }
    const idx = _hash(key, this.table.length);
    if (!this.table[idx]) {
      this.table[idx] = [[key, value]];
    } else {
      this.table[idx].push([key, value]);
    }
  };
  get = (key) => {
    const idx = hashFunction(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((pair) => pair[0] === key)[1];
  };
}

const hashTable = new HashTable();
hashTable.set("dog", "Cody");
hashTable.set("god", "Zeus");
console.log(hashTable.get("dog"));
console.log(hashTable.get("god"));
// worst case of operations with the data - O(n) - depending on the count of collisions. Better hash function = less collisions = less complexity
// average case - O(1) if we choose the right algorithm for the hash function
