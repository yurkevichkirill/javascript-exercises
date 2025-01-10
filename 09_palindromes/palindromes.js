const palindromes = function (str) {
    // arr = str.split("");
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] === ' ' || arr[i] === ',' || arr[i] === '.' || arr[i] === '!' || arr[i] === '?'){
    //         arr.splice(i--, 1);
    //     }
    //     arr[i] = arr[i].toLowerCase();
    // }

    // for(let i = 0; i < arr.length / 2; i++){
    //     if(arr[i] != arr[arr.length - 1 - i]){
    //         return false;
    //     }
    // }
    // return true;
    const alphanumerical = "qwertyuiopasdfghjklzxcvbnm0123456789";

    const cleanedStr = str.toLowerCase().split("").filter(sign => alphanumerical.includes(sign)).join("");
    const reverseStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
