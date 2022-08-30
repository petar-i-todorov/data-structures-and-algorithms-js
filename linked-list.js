class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = this.head;
    this.length = 0;
  }

  push(value) {
    if (!this.head.value) {
      this.head.value = value;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
    this.length++;
  }

  pop() {
    if (this.head.value) {
      let currentNode = this.head;
      let penultimateNode = null;
      while (currentNode.next) {
        penultimateNode = currentNode;
        currentNode = currentNode.next;
      }
      if (penultimateNode) {
        delete penultimateNode.next;
        this.tail = penultimateNode;
      } else {
        this.head = new Node();
        this.tail = this.head;
      }
      this.length--;
    }
  }
  shift() {
    this.head = this.head.next;
    this.length--;
  }

  unshift(value) {
    const previousHead = this.head;
    this.head = new Node(value);
    this.head.next = previousHead;
    this.length++;
  }

  insertBefore(value, beforeValue) {
    if (this.head.value) {
      let currentNode = this.head;
      while (currentNode.next.value !== beforeValue) {
        currentNode = currentNode.next;
      }
      const beforeValueNode = currentNode.next;
      currentNode.next = new Node(value);
      currentNode.next.next = beforeValueNode;
      this.length++;
    }
  }

  print() {
    const arrayToPrint = [];
    let currentNode = this.head;
    while (currentNode) {
      arrayToPrint.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arrayToPrint);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedList = new LinkedList();
linkedList.push(5);
linkedList.push(7);
linkedList.shift();
linkedList.unshift(8);
linkedList.pop();
linkedList.push(7);
linkedList.push(11);
linkedList.print();
linkedList.insertBefore(100, 7);
linkedList.print();
console.log(linkedList.length);
//operations complexity
//insert/remove element - O(1)
//traverse all elements - O(n)
//access i-th element - O(n)
