/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
	str = str.toLowerCase().replace(/[^a-z']/g, "");
	let reverseStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverseStr += str[i];
	}
	return str === reverseStr;
}

module.exports = isPalindrome;
