/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

// In short, we receive a sorted array with duplicates. Remove them without creating a new array (change the input array) and return the length

const nums = [1, 1, 2, 2, 2, 3, 4, 5, 6, 6];
// Since the array is sorted, we can remove the duplicates by comparing current and previous nums, and keeping a counter of every time
// current and prev are not equal which means they are not a duplicate
// Now we have an index to rewrite the nums array. For each time a new element is iterated over, we can store that new unique element
// in index equal to the count of unique elements
const removeDuplicates = (nums) => {
  let prev;
  let count = 0;
  nums.forEach((num) => {
    if (num !== prev) {
      nums[count] = num;
      count++;
    }
    prev = num;
  });
  return count;
};

console.log(removeDuplicates(nums), nums); //6
// [1, 2, 3, 4, 5, 6, 4, 5, 6, 6]
// nums at the end of the function, has the first 6 elements (the number of unique elements), in order with no duplicates
// We could have sliced or spliced but then again.. we could have just used new Set to remove duplicates. Leetcode is fun.
