# Pig Latin

#### This is a Behavior Driven Development (BDD) Exercise for Epicodus, 05.14.2020

#### By Brittany Lindgren and Manny Lopez

## Description

Use BDD to write specifications for a program that will return user sentence in Pig Latin. Then write the program, following the BDD specs.

## Setup/Installation Requirements

* Clone this repository.
* To view the code itself, open in a text editor such as VS Code or Atom, etc.
* To view in your browser, double click on index.html.
* You do not need to run a server to view this document.

## Known Bugs

At this time there are no known bugs.

## Pig Latin Rules
* For words beginning with a vowel, add "way" to the end.
* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
* For words beginning with "y", treat "y" as a consonant.

## Specifications

#### Spec 1
* Behavior: Program gathers user input.
* Input Example: pants
* Output Example: pants
* Input Example: p4#nts
* Output Example: p4#nts

#### Spec 2
* Behavior: The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
* Input Example: 3
* Output Example: 3

#### Spec 3
* Behavior: The program adds "way" to single-letter words beginning with a vowel.
* Input Example: i
* Output Example: iWay

#### Spec 4
* Behavior: Program will add "yay" to the end of multi-letter words beginning with a vowel.
* Input Example: am
* Output Example: amYay

#### Spec 5
* Behavior: The program will treat "y" like a consonant, move it to the end, then add "ay"
* Input Example: year
* Output Example: earYay

#### Spec 6
* Behavior: If a word begins with one or more consonants, the program will move the first consecutive consonants to the end, and add "ay".
* Input Example: translator
* Output Example: anslatorTray

* Input Example: can
* Output Example: anCay

#### Spec 7
* Behavior:  If a word begins with "qu" the program will move "qu" to the end and add "ay"
* Input Example: quiet
* Output Example: ietQuay

#### Spec 8
* Behavior:  Program will parse sentence into individual words and perform above behaviors depending on word.
* Input Example: I am Britt
* Output Example: IWay amyay ittBray

#### Spec 9
* Behavior:  Program will return a string with first letter capitalized and following letters in lowercase
* Input Example: hEllo
* Output Example: Ellohay

## Support and contact details

Please feel free to contact me through GitHub with any questions, ideas or concerns.

## Technologies Used

* HTML
* CSS
* git
* GitHub
* Bootstrap 3.3.7
* javascript and jQuery 3.5.0

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Brittany A Lindgren_**