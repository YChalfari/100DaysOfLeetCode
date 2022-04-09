//! TwoSum
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
const nums = [1, 2, 3, 7];
const target = 8;
//The obvious way to solve this is by using a nested loop
//?They expect the return value to be the indexes
const findTwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      //for each i we go through the num array and compare the sum of num i to num j
      //and return the indexes if the sum matches the target sum
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

console.log(findTwoSum(nums, target)); // [0,3]

//! THIS IS VERY INEFFICIENT with a time complexity of O(N^2)

//The solution I came up with is to use a hashmap and add the difference between num and target as a key and value as the current index
//On each iteration we check if num matches any key in the map which would return the value (index of the other sum)

const twoSum = (nums, target) => {
  let differences = {};
  let answer;
  nums.forEach((num, i) => {
    if (differences[num] === undefined) {
      differences[target - num] = i;
    } else {
      return (answer = [differences[num], i]);
    }
  });
  return answer;
};

console.log(twoSum(nums, target)); //[0,3]

//! If you find a better solution feel free to let me know :)
