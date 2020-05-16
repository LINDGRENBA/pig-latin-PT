// business logic
let pigLatin = function(userInput) {
  let regexVowels = /[aeiou]/;
  let firstVowel = userInput.match(regexVowels);







  // if the length of the user input is one /array.length = 1 / then do the thing below
  // let vowels = ['a', 'i', 'u', 'e', 'o'];
  // may want a consonants array as well as an empty array to hold the characters of the words the user passed in
  // let newWord;
  // vowels.forEach(function(vowel) {
  //   if(userInput === vowel) {
  //     newWord = userInput + 'way';
  //   }
  // });
  // return newWord; 
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