/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (x) => {
    let strX = x.toString();

    // edge Case
    if (strX.length <= 1) {
        return true;
    }

    let front = 0;
    let back = strX.length - 1;

    // iterate through the string
    while (front < back) {
        if ( strX[front] != strX[back] ) {
            return false;
        }
        front++;
        back--;
    }

    return true;
};

console.log("isPalindrome 121:", isPalindrome(121));
console.log("isPalindrome -121:", isPalindrome(-121));
console.log("isPalindrome 10:", isPalindrome(10));