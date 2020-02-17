# Given an array of numbers, find the top K biggest numbers for the array.

# 1. Question
# 2. Assumption
# 3. Solution
# 4. Improvement
# QASI (Question, Assumption, Solution, Improvement)

# Questions to ask
# 1. Are there duplicates?
# 2. Input?
# 3. Sorted or not sorted?

# 1. Approach with sorting, then picking the last k
# O(log(n)) time | O(1) space

# 2. Try to go for a better time complexity, Try a Heap
# Max Heap / Min Heap
# O(n*log(k)) time | O(k) space

# 3. k- find max

#This will assume the array is not sorted and only has integers and no duplicates
#input: [2,1,4,7,3], k = 3
#output: [7,4,3]

def findTopK(arr, k):


