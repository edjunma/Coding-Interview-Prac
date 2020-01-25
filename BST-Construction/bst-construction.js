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

// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space

contains(value) {
    if (value < this.value) {
        if (this.left === null) {
            return false;
        } else {
            return this.left.contains(value);
        }
    } else if (value > this.value) {
        if (this.right === null) {
            return false;
        } else {
            return this.right.contains(value);
        }
    } else {
        return true;
    }
}

// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space

remove(value, parent = null) {
    if (value <  this.value) {
        if (this.left !== null) {
            this.left.remove(value, this);
        }
    } else if (value > this.value) {
        if (this.right !== null) {
            this.right.remove(value, this);
        }
    } else {
        if (this.left !== null && this.right !== null) {
            this.value = this.right.getMinValue();
            this.right.remove(this.value, this);
        } else if (parent === null) {
            if (this.left !== null) {
                this.value = this.left.value;
                this.right = this.left.right;
                this.left = this.left.left;
            } else if (this.right !== null) {
                this.value = this.right.value;
                this.left = this.right.left;
                this.right = this.right.right;
            } else {
                this.value = null;
            }
        } else if (parent.left === this) {
            parent.left = this.left !== null ? this.left : this.right;
        } else if (parent.right === this) {
            parent.right = this.left !== null ? this.left : this.right;
        }
    }
    return this;
}

getMinValue() {
    if (this.left === null) {
        return this.value;
    } else {
        return this.left.getMinValue();
    }
}

// 2nd solution

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
insert(value) {
    let currentNode = this;
    while (true) {
        if (value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = new BST(value);
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = new BST(value);
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
    return this;
}

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space

contains(value) {
    let currentNode = this;
    while (currentNode !== null) {
        if (value < currentNode.value) {
            currentNode = currentNode.left;
        } else if (value > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            return true;
        }
    }
    return false;
}

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space

remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
        parentNode = currentNode;
        currentNode = currentNode.left;
    }
}