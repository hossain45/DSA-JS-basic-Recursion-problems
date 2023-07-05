/* Write a recursive function called reverse which accepts 
a string and returns a new string in reverse. 
-> reverse('awesome') // 'emosewa'
-> reverse('rithmschool') // 'loohcsmhtir' */

function reverse(str){
    if(str === '') return ''
    let revStr = str[str.length - 1]
    return revStr + reverse(str.slice(0, str.length-1));
}

console.log(reverse('awesome'));