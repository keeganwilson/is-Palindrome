// Write your code below
const isPalindrome = str => {
    let str2 = str.split('').reverse().join('');
    if (str2 === str) {
        return true;
    }   else return false;
};

console.log(isPalindrome('racecar'))
