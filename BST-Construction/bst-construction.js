// JavaScript Solution
// Binary Search Tree Construction
// BST class

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space

insert (value) {
    if (value < this.value) {
        if (this.left === null) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }
    } else {
        if (this.right === null) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
    }
    return this;
}