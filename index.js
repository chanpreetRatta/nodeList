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

      return current;
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

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let currentValue = 0;
    while (current !== null) {
      if (current.value === value) {
        return currentValue;
      }
      currentValue++;
      current = current.next;
    }

    return false;
  }

  get toString() {
    let current = this.head;
    let nodeToString = "";

    while (current !== null) {
      nodeToString += `(${current.value}) -> `;
      current = current.next;
    }

    return (nodeToString += "(null)");
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
nodeList.append(24234);
nodeList.prepend(2134243234234);
console.log(nodeList.toString);
