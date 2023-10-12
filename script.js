//moving buttons
const movingButtonsArea = document.getElementById('moving-button-container');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button1 = document.getElementById('button1');

//start button
const startButton = document.getElementById('start-the-game');

const paragraphInstructions = document.getElementById('instructions');
const paragraphGivenText = document.getElementById('given-text-container');
const paragraphTextAddedByClicking = document.getElementById('text-added-by-clicking');

const paragraphResultsTime = document.getElementById('results-time');

//set the initial text
let initialTextList = [
    "Sun is shining.",
    "Birds are singing.",
    "Flowers bloom beautifully.",
    "Children play outside.",
    "People walk dogs.",
    "Sky is clear.",
    "Gentle breeze blows.",
    "Laughter fills air.",
    "Nature is wonderful.",
    "Life is amazing."
];
let initialText = "";

function setInitialText(){
let randomIndex = Math.floor(Math.random() * initialTextList.length);
initialText = initialTextList[randomIndex];
let initialTextArray = initialText.split(" ");
paragraphGivenText.innerHTML = initialText;

//Set inner text for the buttons:
let fisrtButtonWord = initialTextArray[0] + " ";
let secondButtonWord = initialTextArray[1] + " ";
let thirdButtonWord = initialTextArray[2];

button1.innerHTML = "1." + fisrtButtonWord;
button2.innerHTML = "2. " + secondButtonWord;
button3.innerHTML = "3. " + thirdButtonWord;

}

let clickCounter = 0;
let timeZero;
let timeEnd;



// Button click handlers - 
button1.addEventListener('click', () => {
    hideTheMovigButton(button1);
});

button2.addEventListener('click', () => {
    hideTheMovigButton(button2);
});

button3.addEventListener('click', () => {
    hideTheMovigButton(button3);
});

//Start button
startButton.addEventListener('click', () => {
    resetTheGame();
    timeZero = new Date();
    // Move the button initially
    moveButtons();
// Move the button periodically (every 2 seconds in this example)
    setInterval(moveButtons, 4000);
});

//Add the part of the text from the button to the paragraphTextAddedByClicking
function addTextFromButtonToParagraph(button){
    paragraphTextAddedByClicking.innerHTML += (button.innerText).substring(2, button.innerText.lenght);
}

//hide the moving button
function hideTheMovigButton(button){
    addTextFromButtonToParagraph(button);
    clickCounter++; 
    checkNumberOfClicks();  
    button.style.display = 'none';
}

//Check the number of clicks. If it is 3, show results.
function checkNumberOfClicks(){
    if (clickCounter>2){
        timeEnd = new Date();
        paragraphInstructions.innerHTML = "Press Start to play again!";
        if (paragraphTextAddedByClicking.innerHTML==initialText){    
        paragraphResultsTime.innerHTML = "Congratulations! Your final time is: "  + (timeEnd - timeZero).toString() + " ms"; 
        }
        else{
            paragraphResultsTime.innerHTML = "Unfortunately, the text was entered in the wrong order."
        }       
        clickCounter =0;
        //end
    }
}

//reset the game
function resetTheGame(){
    paragraphInstructions.innerHTML = "Click the buttons in the given order.";
    clickCounter =0;
    paragraphTextAddedByClicking.innerHTML="";
    paragraphResultsTime.innerHTML="";
    button1.style.display = 'block';
    button2.style.display = 'block';
    button3.style.display = 'block';
    setInitialText();
}
// Function to move the button to a random position
function moveButton(button) {   
    const minX = button.clientWidth; //window.innerWidth
    const minY = button.clientHeight;    
    const maxX = movingButtonsArea.clientWidth - 2 * button.clientWidth; 
    const maxY = movingButtonsArea.clientHeight - 2*button.clientHeight; 

    const randomX =minX + Math.random() * maxX;
    const randomY = minY + Math.random() * maxY;

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function moveButtons() {
    moveButton(button1);
    moveButton(button2);
    moveButton(button3);
}

function hideAllMovingButtons(){
    button1.style.display = 'none';
    button2.style.display = 'none';
    button3.style.display = 'none';
}

hideAllMovingButtons();





