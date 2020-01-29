# Python Solution
# Solution #1
# O(n) time | O(n) space


def maxSubsetSumNoAdjacent(array):
    if not len(array):
        return 0
    elif len(array) == 1:
        return array[0]
