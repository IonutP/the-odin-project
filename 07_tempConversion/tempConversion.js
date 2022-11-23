const ftoc = function(value) {
    let fvalue = (value - 32) / 1.8000;
    return fvalue == Math.floor(fvalue) ? fvalue : parseFloat(fvalue.toFixed(1));
};

const ctof = function(value) {
    let cvalue = value * 1.8000 + 32;
    return cvalue == Math.floor(cvalue) ? cvalue : parseFloat(cvalue.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
