/*
Write a recursive function called isPalindrome which returns true 
if the string passed to it is a palindrome (reads the same forward and backward).
Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    function reverse(str){
      if(str === '') return ''
      let revStr = str[str.length - 1]
      return revStr + reverse(str.slice(0, str.length-1));
      }
    return (reverse(str) === str) ? true : false;
}

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('awesome'));
