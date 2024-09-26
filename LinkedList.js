//class that constructs a single node in the linked list
class Node {
    constructor (value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode
    }
}
//class that represents the full list
class LinkedList {
    constructor () {
        this.head = null;
    }

    //adds new node containing value to end of list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current  = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    //adds new node containing value to start of list
    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    //returns total number of nodes in list
    size() {
        let total = 0;
        let current = this.head;

        while(current) {
            total++;
            current = current.nextNode
        }
        return total;
    }

    //returns first node in list
    getHead() {
        return this.head;
    }

    //returns last node in list
    tail(){
        let last = null;
        let current = this.head;
        while (current) {
           if (current.nextNode === null) {
            last = current;
            } 
            current = current.nextNode;
        }
        return last;
    }

    //returns node at the given index
    at (index) {
        let node = null;
        let total = 0;
        let current = this.head;

        while(current) {
            total++;
            if(total === index) {
                node = current;
                break;
            }
            current = current.nextNode
        }
        return node;
    }

    //removes last element from list
    pop () {
        let current = this.head; 
        if (!current) {
            return;
        }

        if(!current.nextNode) {
            this.head = null;
            return current;
        }

        while (current.nextNode.nextNode) {
            current = current.nextNode
        }

        let poppedNode = current.nextNode;
        current.nextNode = null;
        return poppedNode;
    }

    //returns true if passed in value is in list and otherwise returns false
    contains(value) {
        let current = this.head; 
        
        if(!current) {
            return false;
        }

        if (current.value === value) {
            return true; 
        }

        while (current.nextNode) {
            current = current.nextNode;
            if (current.value === value) {
                return true;
            }
        }
        return false;
    }

    //returns index of the node containing value, or null if not found
    find(value) {
        let current = this.head;
        let index = 0;
        
        if(!current) {
            return -1;
        }

        if(current.value ===value) {
            return index;
        }

        while(current.nextNode) {
            current = current.nextNode;
            index += 1;
            if(current.value === value) {
                return index;
            }
        }
        return -1;
    }

    //represents LinkedList objects as strings
    toString() {
        let string = '(';
        let current = this.head;

        if(!current) {
            return '()'
        }

        string += current.value;

        while(current.nextNode) {
            string +=') -> (' + current.nextNode.value;
            current = current.nextNode;
        }
        string += ')';
        return string;
    }

    //inserts a new node with the provided value at the given index
    insertAt(value, index) {
        if (index < 0) {
            return false;
        }

        if (index === 0) {
            this.prepend(value);
            return true;
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++
        }

        if (currentIndex < index) {
            return false;
        }

        const newNode = new Node(value);
        newNode.nextNode = current;

        if (previous) {
            previous.nextNode = newNode;
        }
        return true;
    } 

    //removes node at the given index
    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }

        if (index === 0 ) {
            return this.pop();
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
        }
       previous.nextNode = current.nextNode;
       
       return current.value;
    }  
}


//test
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("bear");
list.insertAt("rabbit", 2);
list.removeAt(2)


console.log(list.toString());
/* console.log(list.size());
console.log(list.getHead());
console.log(list.tail());
console.log(list.at(3)); */
console.log(list.pop());
console.log(list.toString());
console.log(list.contains("cat"));
console.log(list.contains("monkey"));
console.log(list.find("cat"));



