/*
    Given two strings, write a function to determine if
    the second string is an anagram of the first. An anagram
    is a word, phrase, or name formed by rearranging the letters
    of another, such as 'cinema', formed from 'iceman'
*/

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    var obj1 = {};
    var obj2 = {};
    for(var i=0; i<str1.length; i++){
        // console.log(str1[i]);
        var char = str1[i];
        obj1[char] = ++obj1[char] || 1;
    }
    
    for(var i=0; i<str2.length; i++){
        var char = str2[i];
        // console.log(str2[i]);
        obj2[char] = ++obj2[char] || 1;
    }
    // console.log(obj1);
    // console.log(obj2);
    for(var key in obj1){
        if(!obj2[key]){
            return false;
        }
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

console.log(isAnagram('cinema', 'iceman')) //true
console.log(isAnagram('aaz', 'zza')) //false
console.log(isAnagram('anagram', 'nagaram')) //true
console.log(isAnagram('rat', 'car')) //false
console.log(isAnagram('awesome', 'awsom')) //false
console.log(isAnagram('qwerty', 'qeywrt')) //true
console.log(isAnagram('texttwisttime', 'timetwisttext')) //true