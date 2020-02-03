# Python Solution
# O(n) time | O(1) space


def findThreeLArgestNumbers(array):
    threeLargeset = [None, None, None]
    for num in array:
        updateLargest(threeLargeset, num)
    return threeLargeset


def updateLargest(threeLargeset, num):
    if threeLargeset[2] is None or num > threeLargeset[2]:
        shiftAndUpdate(threeLargeset, num, 2)
    elif threeLargeset[1] is None or num > threeLargeset[1]:
        shiftAndUpdate(threeLargeset, num, 1)
    elif threeLargeset[0] is None or num > threeLargeset[0]:
        shiftAndUpdate(threeLargeset, num, 0)


def shiftAndUpdate(array, num, idx):
    for i in range(idx + 1):
        if i == idx:
            array[i] = num
        else:
            array[i] = array[i + 1]
