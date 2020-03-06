# Python Solution
# O(n^2) time | O(n) space


def maxSumIncreasingSubsequence(array):
    sequences = [None for x in array]
    sums = [num for num in array]
    maxSumIdx = 0
    for i in range(len(array)):
        currentNum = array[i]
        for j in range(0, i):
            otherNum = array[j]
            if otherNum < currentNum and sums[j] + currentNum >= sums[i]:
                sums[i] = sums[j] + currentNum
                sequences[i] = j
        if sums[i] >= sums[maxSumIdx]:
            maxSumIdx = i
return [sums[maxSumIdx], buildSequence(array, se)]