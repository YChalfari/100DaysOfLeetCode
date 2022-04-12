/* 
  Given a roman numeral, convert it to an integer.
*/

const romanToInt = (s) => {
  //create a map of values for each roman numeral character
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //list characters that can also be subtractors ( I can either be 1 or -1 from the next character (V,X))
  const subtractFromNextChar = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
  };
  let sum = 0;
  let stringArr = s.split("");
  for (i = 0; i < s.length; i++) {
    let current = stringArr[i];
    let next = stringArr[i + 1];
    //This console log might help visualize whats happening on each iteration. Play around with the value we input into the function
    console.log({
      current,
      next,
      i,
      includes: subtractFromNextChar[current].includes(next),
      value: romanValues[current],
    });
    //Check if the next character is included in the current characters subtract from next array
    //(if the current char is a char that subtracts to begin with) otherwise we'll get a runtime error
    //.includes(next) cannot read value of undefined
    //So we take the next value and subtract the current value from it, and add that to the total sum. Then we must increment the index since we consumed the next value
    //we need the next iteration to skip the next value
    if (
      subtractFromNextChar[current] &&
      subtractFromNextChar[current].includes(next)
    ) {
      let val = romanValues[next] - romanValues[current];
      sum += val;
      console.log("in if", i);
      i++;
    } else {
      sum += romanValues[current];
    }
  }
  return sum;
};

console.log(romanToInt("IVII"));
