const sumAll = function(begin, end) {
    if(typeof begin != 'number' || typeof end != 'number' || begin < 0 || end < 0 ||
        !Number.isInteger(begin) || !Number.isInteger(begin)){
        return "ERROR";
    }
    return (begin < end)?(begin + end) * (end - begin + 1) / 2 : (begin + end) * (begin - end + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
