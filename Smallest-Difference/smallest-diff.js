// JavaScript Solution
// O(nlog(n) + mlog(m)) time | O(1) space

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
}