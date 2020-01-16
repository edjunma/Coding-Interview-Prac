# My Python solution
# O(n) time | O(d) space - where n is the total number of elements in the array
# including the sub-elements, and d is the greatest depth of "special" arrays in the array


def productSum(array, multiplier=1):
    sum = 0
    for element in array:
        if type(element) is list:
            sum += productSum(element, multiplier + 1)
        else:
            sum += element
    return sum * multiplier
