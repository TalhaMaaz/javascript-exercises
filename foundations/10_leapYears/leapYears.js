const leapYears = function(year) {

  const disivibilityWithFour = year %4 ===0;
  const isCenturyYear = year%100 ===0;
  const disivibilityWithFourHundred = year%400 ===0;

  if (disivibilityWithFour && !isCenturyYear || disivibilityWithFourHundred){
    return true;
  } else return false;

};

// Do not edit below this line
module.exports = leapYears;
