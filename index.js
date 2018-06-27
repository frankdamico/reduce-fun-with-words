const text = require('./text_node.js') 

const words = text.split(/\W/);
// String
const longestWord = words.reduce((longestWord, word) => {
  // get longest word
  if (longestWord.length > word.length) {
    return longestWord;
  } return word;
}, '');

// Number
// How many times is "comedy" used?
const comedyCount = words.reduce((count, word) => {
  // check if word is "comedy"
  if (word.toLowerCase().includes('comed')) {
    // increase count by 1
    return count + 1;
  } return count
}, 0);

console.log(comedyCount);


// Boolean
// is the phrase "Lorne Michaels" included in the words
const containsLorne = words.reduce((contains, word, i, words) => {
  // check if current word is "Lorne" 
  if (word === 'Lorne') {
    // check if next word is "Michaels"
    if (words[i + 1] === 'Michaels') {
      return true;
    }
  }
  return contains;
}, false);

console.log(containsLorne);

// Object
/* 
  {
    Lorne: 1,
    comedy: 13,
    ...
  }
*/

const wordCountSummary = words.reduce((summary, word) => {
  // if word is in the summary object
  word = word.toLowerCase();
  if (summary[word]) {
    // increment value at word key by 1
    summary[word]++;
  } else {
    // ELSE add word as key in summary, set value to 1
    summary[word] = 1; 
  }
  return summary
}, {});

console.log(wordCountSummary);


// Sort by amount of occurrences
const sortedWords = Object.keys(wordCountSummary)
  .sort((wordA, wordB) => wordCountSummary[wordB] - wordCountSummary[wordA]);

const filterWords = [ 'and', 'the', 'that', 'for', 'but' ];

const top10Words = sortedWords
  .filter(word => word.length > 2)
  .filter(word => !filterWords.includes(word));


console.log(top10Words);
