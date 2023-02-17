// COMP1073 Client-Side JavaScript | Assignment 1 | Jihan Duerme

/* ALL VARIABLES
-------------------------------------------------- */
// Select and declare variables for:

// ...each of the 5 paragraph elements containing parts of the full sentence
let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');
let text3 = document.querySelector('#text3');
let text4 = document.querySelector('#text4');
let text5 = document.querySelector('#text5');

// ...each of the 5 button elements for each coresponding part of the full sentence
const text1Btn = document.querySelector('#text1Btn');
const text2Btn = document.querySelector('#text2Btn');
const text3Btn = document.querySelector('#text3Btn');
const text4Btn = document.querySelector('#text4Btn');
const text5Btn = document.querySelector('#text5Btn');

// ...the View Story button element that generates a full sentence in parts or as a whole
// text will depend on the individual randomized text/s by user
const viewBtn = document.querySelector('#viewBtn');

// ...the Surprise Me button element that generates a full sentence entirely different from the other elements
// randomized text will always be in complete sentences
const randomBtn = document.querySelector('#randomBtn');

// ...the refresh button that returns empty strings for all paragraph elements
const resetBtn = document.querySelector('#resetBtn');

// ...the paragraph element that displays the generated text when 'View Story' or 'Surprise Me' buttons are are clicked
let display = document.querySelector('#display');

// ...and the 5 arrays containing text that would replace parts of the sentence
let text1Array = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
let text2Array = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
let text3Array = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let text4Array = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let text5Array = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

/* FUNCTION NO. 1 - Randomize text
-------------------------------------------------- */
// Generate a random number using the length of the array. This ensures that the random number won't go over the length of the array.
// Use the random number generated to pick a new value from the array
// Return the text content of each of the 5 paragraph elements
// Create one function for each of the 5 paragraph elements

function randomText1Output() { 
    let randomText1 = Math.floor(Math.random() * text1Array.length);
    let text1New = text1Array[randomText1];
    text1.textContent = text1New;
};
function randomText2Output() { 
    let randomText2 = Math.floor(Math.random() * text2Array.length);
    let text2New = text2Array[randomText2];
    text2.textContent = text2New;
};
function randomText3Output() { 
    let randomText3 = Math.floor(Math.random() * text3Array.length);
    let text3New = text3Array[randomText3];
    text3.textContent = text3New;
};
function randomText4Output() { 
    let randomText4 = Math.floor(Math.random() * text4Array.length);
    let text4New = text4Array[randomText4];
    text4.textContent = text4New;
};
function randomText5Output() { 
    let randomText5 = Math.floor(Math.random() * text5Array.length);
    let text5New = text5Array[randomText5];
    text5.textContent = text5New;
};

/* FUNCTION NO. 2 - View full story
-------------------------------------------------- */
// Display a string of the randomized text
// Only the values with randomized text will return the text content. If there are 0 text generated, nothing will show on the story
function viewStory() {
    display.textContent = `${text1.textContent} ${text2.textContent} ${text3.textContent} ${text4.textContent} ${text5.textContent}`;
};

/* FUNCTION NO. 3 - Surprise me
-------------------------------------------------- */
// Generate a random number of for ALL paragraph elements using the length of each of the arrays
// Like Function No. 1, use generated number to pick a value from the array
// Display a string with all the randomized text
function surpriseMe() {
    let randomText1 = Math.floor(Math.random() * text1Array.length);
    let randomText2 = Math.floor(Math.random() * text2Array.length);
    let randomText3 = Math.floor(Math.random() * text3Array.length);
    let randomText4 = Math.floor(Math.random() * text4Array.length);
    let randomText5 = Math.floor(Math.random() * text5Array.length);
    display.textContent = `${text1Array[randomText1]} ${text2Array[randomText2]} ${text3Array[randomText3]} ${text4Array[randomText4]} ${text5Array[randomText5]}`;
};

/* FUNCTION NO. 3 - Reset
-------------------------------------------------- */
// Clear ALL paragraph element values by returning text content of ALL paragraph element into empty strings
function resetText() {
    text1.textContent = "";
    text2.textContent = "";
    text3.textContent = "";
    text4.textContent = "";
    text5.textContent = "";
    display.textContent = "";
}

/* DISPLAY
-------------------------------------------------- */
// Click event to call created function that randomize array values and display on the each of the paragraph elements
text1Btn.addEventListener('click', randomText1Output);
text2Btn.addEventListener('click', randomText2Output);
text3Btn.addEventListener('click', randomText3Output);
text4Btn.addEventListener('click', randomText4Output);
text5Btn.addEventListener('click', randomText5Output);

// Click event to call created function that returns string that contains the randomized array values of the paragraph elements
viewBtn.addEventListener('click', viewStory);

// Click event to call created functiion that returns a string that contains completely randomized array values unrelated to the other elements
randomBtn.addEventListener('click', surpriseMe);

// Click event to call function that sets all paragraph elements to empty strings 
resetBtn.addEventListener('click', resetText);