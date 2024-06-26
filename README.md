# FCC_JavaScript_PalindromeChecker
This is my solution for the [**Build a Palindrome Checker**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-palindrome-checker-project/build-a-palindrome-checker)
required project for the [**freeCodeCamp's JavaScript Algorithms and Data Structures (Beta)**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) certification using JavaScript, HTML, and CSS. <br />

## Contents
- [What is a palindrome](#what-is-a-palindrome)
- [How to use the Palindrome Checker in a Website](#how-to-use-the-palindrome-checker-in-a-website)
- [Project Tasks Summary](#project-tasks-summary)
- [Files](#files)
- [Project tests](#project-tests)

## What is a palindrome
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

[<sub>Back to top</sub>](#top)

## How to use the Palindrome Checker in a website
- Click on the text box (where the placeholder text "Write here!" can be found) and type the word or sentence you want to check.
- Click on the "Check" button. Right below it, the text "[Your word or sentence] is a palindrome" or "[Your word or sentence] is not a palindrome" will appear.
- To clear the text in the text box, you can click on the "Reset" button.

[<sub>Back to top</sub>](#top)

## Project Tasks Summary
To build an app that functions similarly to [https://palindrome-checker.freecodecamp.rocks](https://palindrome-checker.freecodecamp.rocks).

[<sub>Back to top</sub>](#top)

## Files
- index.html
- styles.css
- script.js

[<sub>Back to top</sub>](#top)

## Project Tests
For project completion, the app must pass the following tests (more details on [freeCodeCamp's JavaScript Algorithms and Data Structures (Beta)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)):
1. You should have an `input` element with an `id` of `"text-input"`
2. You should have a `button` element with an `id` of `"check-btn"`
3. You should have a `div`, `span` or `p` element with an `id` of `"result"`
4. When you click on the `#check-btn` element without entering a value into the `#text-input` element, an alert should appear with the text `"Please input a value"`
5. When the `#text-input` element only contains the letter `A` and the `#check-btn` element is clicked, the `#result` element should contain the text `"A is a palindrome"`
6. When the `#text-input` element contains the text `eye` and the `#check-btn` element is clicked, the `#result` element should contain the text `"eye is a palindrome"`
7. When the `#text-input` element contains the text `_eye` and the `#check-btn` element is clicked, the `#result` element should contain the text `"_eye is a palindrome"`
8. When the `#text-input` element contains the text `race car` and the `#check-btn` element is clicked, the `#result` element should contain the text `"race car is a palindrome"`
9. When the `#text-input` element contains the text `not a palindrome` and the `#check-btn` element is clicked, the `#result` element should contain the text `"not a palindrome is not a palindrome"`
10. When the `#text-input` element contains the text `A man, a plan, a canal. Panama` and the `#check-btn` element is clicked, the `#result` element should contain the text `"A man, a plan, a canal. Panama is a palindrome"`
11. When the `#text-input` element contains the text `never odd or even` and the `#check-btn` element is clicked, the `#result` element should contain the text `"never odd or even is a palindrome"`
12. When the `#text-input` element contains the text `nope` and the `#check-btn` element is clicked, the `#result` element should contain the text `"nope is not a palindrome"`
13. When the `#text-input` element contains the text `almostomla` and the `#check-btn` element is clicked, the `#result` element should contain the text `"almostomla is not a palindrome"`
14. When the `#text-input` element contains the text `My age is 0, 0 si ega ym.` and the `#check-btn` element is clicked, the `#result` element should contain the text `"My age is 0, 0 si ega ym. is a palindrome"`
15. When the `#text-input` element contains the text `1 eye for of 1 eye.` and the `#check-btn` element is clicked, the `#result` element should contain the text `"1 eye for of 1 eye. is not a palindrome"`
16. When the `#text-input` element contains the text `0_0 (: /-\ :) 0-0` and the `#check-btn` element is clicked, the `#result` element should contain the text `"0_0 (: /-\ :) 0-0 is a palindrome"`
17. When the `#text-input` element contains the text `five|\_/|four` and the `#check-btn` element is clicked, the `#result` element should contain the text `"five|\_/|four is not a palindrome"`

[<sub>Back to top</sub>](#top)
