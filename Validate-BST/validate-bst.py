# Python Solution
# BST input class

class BST:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None


# O(n) time | O(d) space
def validateBst(tree):
  return validateBstHelper(tree, float("-inf"), float("inf"))

  