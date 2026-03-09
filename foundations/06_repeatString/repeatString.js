const repeatString = function(string, num) {
  if (num <0){
    return 'ERROR';
  }
  else{
    let i = 0;
    let finalString='';
    for (i; i<num ; i++){
      finalString +=string
    }
    return finalString
  }
};

// Do not edit below this line
module.exports = repeatString;
