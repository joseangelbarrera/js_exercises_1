// isVowel() function
// Write a function that takes a character
// (i.e. a string of length 1) and returns true if it is
// a vowel, false otherwise.

function isVowel (char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true
  } else {
    return false
  }
}
console.log(isVowel('verde'))
