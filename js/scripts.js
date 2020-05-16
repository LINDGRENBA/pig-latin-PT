// business logic
let pigLatin = function(userInput) {

  let words = userInput.split(' ');
  console.log(words);
  let newWords = [];

  words.forEach(function(word) {

    let regexVowels = /[aeiou]/;
    let firstVowel = word.match(regexVowels);
    let firstVowelPosition = word.indexOf(firstVowel);

    if(word.length === 1 && firstVowelPosition === 0) {
      newWords.push(word + 'way');
    } else if(firstVowelPosition === 0) {
      newWords.push(word + 'yay');
    } else if (word.charAt(0) === 'q' && word.charAt(1) === 'u') {
      newWords.push(word.slice(2) + word.slice(0, 2) + 'ay');
    } else {
      newWords.push(word.slice(firstVowelPosition) + word.slice(0, firstVowelPosition) + 'ay');
    }
  });
  console.log(newWords);
  return newWords.join(' ') + '.';;
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