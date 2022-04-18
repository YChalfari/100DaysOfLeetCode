/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/
const nums = [-1, 0, 1, 2, -1, -4];

const threeSum = (arr) => {
  //First we sort the array since we are going to use 2 pointers to solve the problem
  arr.sort((a, b) => a - b);
  const triplets = [];
  //We are only running until arr.length - 2 because our "left" pointer is arr[i+1] and "right" is arr.length-1
  // so the last 2 elements are accounted for once we reach arr[len-3]
  for (let i = 0; i < arr.length - 2; i++) {
    //Make sure there are no duplicate numbers
    //by checking if it is equal to the previous number
    if (arr[i] != arr[i - 1]) {
      let left = i + 1;
      let right = arr.length - 1;
      //While the 2 pointers have not yet overlapped
      while (left < right) {
        const currentSum = arr[i] + arr[left] + arr[right];

        if (currentSum === 0) {
          triplets.push([arr[i], arr[left], arr[right]]);

          //move our pointers before the next iteration and make sure there are no duplicates
          while (arr[left] == arr[left + 1]) left++;
          while (arr[right] == arr[right - 1]) right++;
          left++;
          right--;
          //If sum is less than 0, since the array is sorted, we need a higher number so we increment the left pointer
        } else if (currentSum < 0) {
          left++;
          //ELSE if sum is greater than 0, we need to lower the number, hereby decrementing the right pointer
        } else {
          right--;
        }
      }
    }
  }
  return triplets;
};

console.log(threeSum(nums));
