// business logic
let pigLatin = function(userInput) {

  let regexVowels = /[aeiou]/;
  let firstVowel = userInput.match(regexVowels);
  let firstVowelPosition = userInput.indexOf(firstVowel);

  if(userInput.length === 1 && firstVowelPosition === 0) {
    return userInput + 'way';
  } else if(firstVowelPosition === 0) {
    return userInput + 'yay';
  } else if (userInput.charAt(0) === 'q' && userInput.charAt(1) === 'u') {
    return userInput.slice(2) + userInput.slice(0, 2) + 'ay';
  } else {
    return userInput.slice(firstVowelPosition) + userInput.slice(0, firstVowelPosition) + 'ay'
  }
}

// user interface
$(document).ready(function() {
  $('#sentence-form').submit(function(event) {
    event.preventDefault();

    let userInput = $('#user-sentence').val();
    let result = pigLatin(userInput);
    
    $('.pig-latin').text(result);
    console.log(result);

  });
});


// original business logic, discarded at time of refactoring
  // if the length of the user input is one /array.length = 1 / then do the thing below
  // let vowels = ['a', 'i', 'u', 'e', 'o'];
  // may want a consonants array as well as an empty array to hold the characters of the words the user passed in
//   let newWord;
//   vowels.forEach(function(vowel) {
//     if(userInput === vowel) {
//       newWord = userInput + 'way';
//     }
//   });
//   return newWord; 