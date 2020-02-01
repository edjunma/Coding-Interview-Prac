# Python Solution #1
# Upper Bound: O(n^2*n!) time | O(n*n!) space
# Roughly: O(n*n!) time | O(n*n!) space

def getPermutations(array):
  permutations = []
  permutationsHelper(array, [], permutations)
  return permutations

def permutationsHelper(array, currentPermutation, permutations):