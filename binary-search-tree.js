class BinarySearchTree {
  root = null;
  nodesValues = [];
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      this.nodesValues.push(value);
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.leftNode) {
            currentNode.leftNode = new Node(value);
            this.nodesValues.push(value);
            break;
          } else {
            currentNode = currentNode.leftNode;
          }
        } else if (value > currentNode.value) {
          if (!currentNode.rightNode) {
            currentNode.rightNode = new Node(value);
            this.nodesValues.push(value);
            break;
          } else {
            currentNode = currentNode.rightNode;
          }
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(5);
binarySearchTree.insert(6);
binarySearchTree.insert(7);
binarySearchTree.insert(9);
binarySearchTree.insert(0);
binarySearchTree.insert(10);
console.log(binarySearchTree.nodesValues);

//complexity
//average case (insert, delete, search) - O(log n)
//worst case - O(n) if the whole binary tree represents a straight line of only ascending/descending values
