const reverseString = function(string) {
  let i  = 0;
  let finalArray = [];
  let finalString = '';
  let array  = string.split('')
  for (i; i<string.length;i++){
    finalArray.push(array.pop())
  }
  finalString = finalArray.join('')
  return  finalString
};

// Do not edit below this line
module.exports = reverseString;
