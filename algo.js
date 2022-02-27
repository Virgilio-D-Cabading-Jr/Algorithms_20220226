/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (x) => {
    let strX = x.toString();

    // edge Case
    if (strX.length <= 2) {
        return true;
    }

    let front = 0;
    let back = strX.length - 1;

    return true;
};

console.log("isPalindrome 121:", isPalindrome(121));