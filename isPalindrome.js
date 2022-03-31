// Write your code below
const isPalindrome = str => {
    let strRev = str.split('').reverse().join('');
    if (strRev === str) {
        return true;
    }   else return false;
};

console.log(isPalindrome('racecar'))
