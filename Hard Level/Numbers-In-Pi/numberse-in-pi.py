# Python Solution #1
# O(n^3 + m) time | O(n + m) space - where n is the number of digits in Pi and m is the number of favorite numbers


def numbersInPi(pi, numbers):
    numbersTable = {number: True for number in numbers}
    minSpaces = getMinSpaces(pi, numbersTable, {}, 0)
    return -1 if minSpaces == float("inf") else minSpaces


def getMinSpaces(pi, numbersTable, cache, idx):
    if idx == len(pi):
