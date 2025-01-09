const reverseString = function(str) {
    let newStr = str.split("");
    for(let i = 0; i < str.length / 2; i++){
        let temp = newStr[i];
        newStr[i] = newStr[newStr.length - 1 - i];
        newStr[newStr.length - 1 - i] = temp;
    }
    return newStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
