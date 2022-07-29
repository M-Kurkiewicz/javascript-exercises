const palindromes = function (word) {
    let a = word.toLowerCase().replace(/\s/g, '').replace(".", '').replace(/\,/g,"").replace(/!/g,"").split('').join('')
    let b = word.toLowerCase().replace(/\s/g, '').replace(".", '').replace(/\,/g,"").replace(/!/g,"").split('').reverse().join('')
    if(a == b) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
