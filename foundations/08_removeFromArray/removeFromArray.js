const removeFromArray = function(array, ...rest) {
  let finalArray;
  finalArray = array.filter((x) => !rest.includes(x));
  return finalArray;
}

// Do not edit below this line
module.exports = removeFromArray;
