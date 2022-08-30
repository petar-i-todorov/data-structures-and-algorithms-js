class LinkedList {
  constructor() {
    this.root = new Node();
    this.size = 0;
  }
  add(value) {
    if (!this.root.value) {
      this.root.value = value;
    } else {
      let currentNode = this.root;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
    this.size++;
  }
  print() {
    const arrayToPrint = [];
    let currentNode = this.root;
    while (currentNode) {
      arrayToPrint.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arrayToPrint);
  }
  getSize() {
    return this.size;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(7);
linkedList.add(5);
linkedList.add(7);
linkedList.add(5);
linkedList.add(7);
linkedList.print();
console.log(linkedList.getSize());
