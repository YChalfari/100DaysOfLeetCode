/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.
*/

//This was my first solution but it is not efficient since each method I believe iterates over the num

const isPalindrome = (num) => {
  if (num < 0) return false;
  let numArr = parseInt(num.toString().split("").reverse().join(""));
  return numArr === num ? true : false;
};

// Creating a pointer from the last element and moving it toward the current after each iteration was more efficient
// We don't need to parseInt or reverse or join so we saved all those actions
const isPalindrome2 = (num) => {
  if (num < 0) return false;
  let numArr = num.toString().split("");
  let rightPointer = numArr.length - 1;
  let isPalindrome = true;
  for (let i = 0; i < numArr.length; i++) {
    let current = numArr[i];
    //This is a neat readable way to log multiple values. There is also console.table() which I have yet to use
    console.log({ i, current, right: numArr[rightPointer] });
    if (current !== numArr[rightPointer]) {
      isPalindrome = false;
      break;
    } else {
      rightPointer--;
    }
  }
  return isPalindrome;
};

//!This is a solution I found online. Have not done the math to understand how it works
const isPalindromeWild = (x) => {
  let rev_num = 0;
  let num = x;
  while (num > 0) {
    rev_num = rev_num * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev_num === x ? true : false;
};

// console.log(isPalindrome(123));
// console.log(isPalindrome(12321));

console.log(isPalindrome2(123));
console.log(isPalindrome2(12321));
