// Create a function that takes in two strings as two parameters and returns a boolean that 
//indicates whether or not the first string is an anagram of the second string.

// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starrer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

const isAnagram = (str1, str2) => {
    let str1Clean = str1.replaceAll(" ","");
    let str2Clean = str2.replaceAll(" ","");

    let sortedStr1 = str1Clean.split('').sort().join('').toLowerCase;
    let sortedStr2 = str2Clean.split('').sort().join('').toLowerCase;
    return (sortedStr1 === sortedStr2)
}


console.log(isAnagram("Astronomer", "Moon starrer"));