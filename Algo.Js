

// Initialize counters
let sentenceLength = 0;
let wordCount = 0;
let vowelCount = 0;

// Read the input sentence
const sentence = prompt("Enter a sentence (ending with a period):");

// Iterate through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
  const char = sentence.charAt(i);
  
  // Increase the sentence length counter
  sentenceLength++;
  
  // Check if the character is a space and the previous character was not a space
  if (char === ' ' && i > 0) {
    wordCount++;
  }
  
  // Check if the character is a vowel (case-insensitive)
  if ('AEIOUaeiou'.includes(char)) {
    vowelCount++;
  } 
}

// The last character is a period, so we subtract 1 from the sentence length
sentenceLength--;

// Output the results

const len = document.getElementById("len");
const numW = document.getElementById("numW");
const numV = document.getElementById("numV");

len.innerHTML = "Sentence Length: " + sentenceLength;
numW.innerHTML = "Number of Words: " + wordCount + 1;
numV.innerHTML = "Number of Vowels: " + vowelCount;





console.log("Sentence Length:", sentenceLength);
console.log("Number of Words:", wordCount + 1);  // Add 1 to include the last word
console.log("Number of Vowels:", vowelCount);
