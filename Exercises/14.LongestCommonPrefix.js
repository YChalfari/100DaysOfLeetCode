/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

const arr = ["flower", "flow", "flight"];
const failArr = ["dog", "racecar", "car"];

//! At first I wrote a super long nonsensical code block with many ifs and str.split and slice ... don't ask.
// At some point I said OK this is terrible so I started over but before writing the code I repeated over and over in human words
// What the goal here is but in depth and it boils down to this: "All words having the same characters at the same indexes"
// In the end my ridiculous code can be broken down to one simple line of code which is the while loop

const longestCommonPrefix = (strs) => {
  // check border cases size 1 array and empty first word)
  if (!strs[0] || strs.length == 1) return strs[0] || "";

  let i = 0;
  // while all words have the same character at position i, increment i
  while (strs[0][i] && strs.every((w) => w[i] === strs[0][i])) i++;

  // prefix is the substring from the beginning to the last successfully checked i
  return strs[0].substr(0, i);
};

console.log(longestCommonPrefix(arr));
console.log("should be empty string", longestCommonPrefix(failArr), "<-");
