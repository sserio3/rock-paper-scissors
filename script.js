/**
 * Randomly selects rock, paper, or scissors for the computer.
 * @returns {string} The computer's choice (rock, paper, or scissors).
 */
function getComputerChoice() {
    // Generate a random number between 0 and 2 to simulate computer's choice
    const randNum = Math.floor(Math.random() * 3);

    // Select the computer's choice based on the random number
    switch (randNum) {
        case 0:
            return "rock"; // Return "rock" if randNum is 0
        case 1:
            return "paper"; // Return "paper" if randNum is 1
        case 2:
            return "scissors"; // Return "scissors" if randNum is 2
        default:
            return null; // Default case should not be reached, return null for safety
    }
}


/**
 * Gets the user's choice from prompt (assume choice will be valid for now).
 * @returns {string} The user's choice (rock, paper, or scissors).
 */
function getHumanChoice() {
    // Prompt the user for their choice
    let choice = prompt("Please choose rock, paper, or scissors:").toLowerCase();

    return choice; // Return the user's choice
}


/**
 * Play five rounds of rock-paper-scissors.
 * @returns {void}
 */
function playGame() {
    // Instantiate score variables
    let humanScore = 0; // Initialize human user's score
    let computerScore = 0; // Initialize computer's score


    /**
     * Plays a round of rock-paper-scissors and determines the winner based on user and computer choices.
     * @param {string} humanChoice - The human user's choice (rock, paper, or scissors).
     * @param {string} computerChoice - The computer's choice (rock, paper, or scissors).
     * @returns {void}
     */
    function playRound(humanChoice, computerChoice) {
        // Check if choices match for a tie
        if (humanChoice === computerChoice) {
            console.log("Nobody wins. It's a tie!"); // Log a tie message
        }
        // Check if human user's choice beats computer's choice
        else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            let winningChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1); // Capitalize the first letter of the winning choice
            console.log(`You win! ${winningChoice} beats ${computerChoice}.`); // Log a win message
            humanScore++; // Increment human score
        } else {
            let winningChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1); // Capitalize the first letter of the winning choice

            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`); // Log a lose message
            computerScore++; // Increment computer score
        }
        return; // Exit the function
    }


    // Instantiate choice variables for human and computer
    let humanChoice; // Variable to store human user's choice
    let computerChoice; // Variable to store computer's choice

    // Loop for 5 rounds of the game
    for (let i = 0; i < 5; i++) { 
        console.log(`Round ${i + 1}`); // Log the round number

        // Get choices for the current round
        humanChoice = getHumanChoice(); // Get the human user's choice
        computerChoice = getComputerChoice(); // Get the computer's choice

        // Play a round with the choices made
        playRound(humanChoice, computerChoice);

        // Log the current scores and number of ties
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}


// Test 1: Check if the getComputerChoice function returns a valid choice
const computerChoice = getComputerChoice();
console.log(computerChoice);

// Validate the result
if (["rock", "paper", "scissors"].includes(computerChoice)) {
  console.log("TEST PASSED: Valid output.");
} else {
  console.log("TEST FAILED: Invalid output.");
}


// Test 2: Check if the getHumanChoice function returns the user's choice (assume valid input)
// Note: Will change to validate input in the future

// Get the user's choice
const humanChoice = getHumanChoice();
console.log(humanChoice); 

// Check for input
if (!humanChoice) {
    console.log("TEST FAILED: No input found.");
    } else {
    console.log("TEST PASSED: Input found.");
}


// // Test 3: Check if the playRound function updates scores correctly for player win with hardcoded values
// const humanSelectionWin = "scissors";  // Hardcoded human user's winning choice
// const computerSelectionWin = "paper";  // Hardcoded computer's losing choice

// // Play a round with the selections given
// playRound(humanSelectionWin, computerSelectionWin);

// // Check if the scores are updated correctly
// if (humanScore > 0 && computerScore == 0) {
//     console.log("TEST PASSED: Scores for human win updated correctly.");
// }
// else {
//     console.log("TEST FAILED: Scores for human win not updated correctly.");
// }


// // Test 4: Check if the playRound function updates scores correctly for computer win with hardcoded values

// // Reset scores to 0 for test
// let humanScoreTest = 0;
// let computerScoreTest = 0;

// const humanSelectionLose = "scissors";  // Hardcoded human user's losing choice
// const computerSelectionLose = "rock";  // Hardcoded computer's winning choice

// // Play a round with the selections given
// playRound(humanSelectionLose, computerSelectionLose);

// // Check if the scores are updated correctly
// if (humanScore == 0 && computerScore > 0) {
//     console.log("TEST PASSED: Scores for computer win updated correctly.");
// }   
// else {
//     console.log("TEST FAILED: Scores for computer win not updated correctly.");
// }


// // Test 5: Check if the playRound function handles ties correctly

// // Reset scores to 0 for test
// humanScoreTest = 0;
// computerScoreTest = 0;

// const humanSelectionTie = "rock";  // Hardcoded human user's choice
// const computerSelectionTie = "rock";  // Hardcoded computer's choice

// // Play a round with the selections given
// playRound(humanSelectionTie, computerSelectionTie);

// // Check if the scores are updated correctly
// if (humanScore == 0 && computerScore == 0) {
//     console.log("TEST PASSED: Scores for tie not updated correctly.");
// }
// else {
//     console.log("TEST FAILED: Scores for tie not updated correctly.");
// }


// Test 6: Run the game and check if it plays 5 rounds manually
playGame(); // Call the playGame function to start the game