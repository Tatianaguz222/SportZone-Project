
/* ========================================
   SPORTZONE - JAVASCRIPT
   Move Beyond Limits
======================================== */


/* 1. SELECT HTML ELEMENTS */

const button = document.getElementById("motivationButton");
const message = document.getElementById("message");


/* 2. MOTIVATIONAL QUOTES */

const quotes = [
    "Your only limit is the one you set yourself. Keep going!",
    "Small steps every day lead to big results!",
    "Discipline beats motivation. Show up for yourself!",
    "Believe in your progress. You are getting stronger!"
];


/* 3. MOTIVATION BUTTON INTERACTION */

if (button && message) {

    button.addEventListener("click", function () {

        // Generate a random number
        const randomIndex = Math.floor(
            Math.random() * quotes.length
        );

        // Display a random motivational quote
        message.textContent = quotes[randomIndex];

    });

}
