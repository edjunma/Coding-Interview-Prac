// My solution
// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  // Two for loops to sum all the possible pairs
  for(let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for(let j = 0; j < array.length; j++) {
      const secondNum = array[j];
      if(firstNum, secondNum).sort((a,b) => a - b);
    }
  }
}

return [];

// O(n) time | O(n) space

function twoNumberSum(array, targetSum) {
  const nums = {};
  for(const num of array) {
    const potentialMatch = targetSum - num;
    if(potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// O(nlog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while(left < right) {
    const currentSum = array[left] + array[right];
    if(currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return[];
}
