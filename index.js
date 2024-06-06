class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class NodeList {
  constructor() {
    this.head = new Node();
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  append(value) {
    if (this.head.value === null) this.head.value = value;
    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(value);
    }

    this._size++;
  }

  atIndex(index) {
    if (index >= this._size)
      throw new Error("atIndex is greater than the size of the Node list");
    else {
      let current = this.head;
      for (let pointer = 0; pointer < index; pointer++) {
        current = current.next;
        console.log(pointer);
      }

      return current.value;
    }
  }

  prepend(value) {
    let node = new Node(value);

    node.next = this.head;
    this.head = node;

    this._size++;
  }

  pop() {
    let current = this.head;
    let last;
    while (current.next.next !== null) {
      current = current.next;
    }

    last = current.next;
    current.next = null;

    this._size--;
    return last;
  }

  get header() {
    return this.head;
  }

  get tail() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }
}

let nodeList = new NodeList();
nodeList.append(45);
nodeList.append(55);
nodeList.append(65);
nodeList.prepend(35);

console.log(nodeList.pop());
console.log(nodeList.pop());

console.log(nodeList);
