const sumAll = function(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end) || start <0 || end<0){
    return 'ERROR'
  }
  else{

  let min = Math.min(start,end);
  let max = Math.max(end,start);
  let array = [];
  for (min;min<=max;min++){
    array.push(min)
  }
  //console.log(array)

  let sum = array.reduce((total, current) => {
    total += current;
    return total;
  }, 0);
  return sum;
  }
};

console.log(sumAll(1,3))

// Do not edit below this line
module.exports = sumAll;
