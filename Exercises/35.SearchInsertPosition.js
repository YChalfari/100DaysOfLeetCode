/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

const exp1 = [[1, 3, 5, 6], 5];
const exp2 = [[1, 3, 5, 6], 2];
const exp3 = [[1, 3, 5, 6], 7];

// Since the array is sorted we just need a pointer of the next index, I don't think we need the previous like I submitted but I haven't tried
//All we need to do is check if the target is either equal to current number, in which case we break and return i, or
//If the target is between the current and next ... see below I had an epiphany
const searchInsertBad = (nums, target) => {
  //If the target is greater than the greatest num in arr, return arr.length (target should be last element)
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  //If target is less than the lowest num in arr, return 0 (target should be first element)
  if (nums[0] > target) return 0;
  let prev;
  let next;
  let answer;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      answer = i;
      break;
    }
    if (target > prev && target < next) {
      answer = i;
      break;
    }
    prev = nums[i];
    next = nums[i + 1];
  }
  return answer;
};
//! While I was writing out the previous solution I realized it's much simpler!!
// All we need to check besides for if the target is greater than the greatest value in array or lower than the lowest value in array
// Is if the current value is equal to or greater than the target then the targets index would be in place of the current
const searchInsert = (nums, target) => {
  //If the target is greater than the greatest num in arr, return arr.length (target should be last element)
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  //If target is less than the lowest num in arr, return 0 (target should be first element)
  if (nums[0] > target) return 0;
  let answer;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current > target || current === target) {
      answer = i;
      break;
    }
  }
  return answer;
};

console.log({
  exp1: searchInsert(...exp1),
  exp2: searchInsert(...exp2),
  exp3: searchInsert(...exp3),
});
