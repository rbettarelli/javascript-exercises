const ftoc = function(temp) {

  temp = ((temp - 32) / 1.8).toFixed(1);


  let round = (temp *= 10) / 10;
  return round;

  



};

const ctof = function(temp) {

  temp = ((temp * 1.8) + 32).toFixed(1);

  let round = (temp *= 10) / 10;
  return round;



};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
