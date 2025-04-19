/**
 * Randomly selects rock, paper, or scissors for the computer.
 * @returns {string} The computer's choice (rock, paper, or scissors) or null if something goes wrong.
 */
function getComputerChoice() {
    // Generate a random number between 0 and 2 to simulate computer's choice
    const randNum = Math.floor(Math.random() * 3);

    // Select the computer's choice based on the random number
    switch (randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return null; // Default case should not be reached, return null for safety
    }
}


/**
 * Gets the user's choice from prompt (assume choice will be valid for now).
 * @returns {string} The user's choice (rock, paper, or scissors).
 */
function getHumanChoice() {
    // Prompt the user for their choice and convert it to lowercase for consistency
    let choice = prompt("Please choose rock, paper, or scissors:").toLowerCase();

    return choice;
}


/**
 * Play five rounds of rock-paper-scissors.
 * @returns {void}
 */
function playGame() {
    // Instantiate score variables
    let humanScore = 0;
    let computerScore = 0;


    /**
     * Plays a round of rock-paper-scissors and determines the winner based on user and computer choices.
     * @param {string} humanChoice - The human user's choice (rock, paper, or scissors).
     * @param {string} computerChoice - The computer's choice (rock, paper, or scissors).
     * @returns {void}
     */
    function playRound(humanChoice, computerChoice) {
        // Check if choices match for a tie
        if (humanChoice === computerChoice) {
            console.log("Nobody wins. It's a tie!");

        // Check if human user's choice beats computer's choice and increment human score
        } else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            let winningChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1); // Capitalize the first letter of the winning choice
            console.log(`You win! ${winningChoice} beats ${computerChoice}.`);
            humanScore++;
        
        // Check if computer's choice beats human user's choice and increment computer score
        } else {
            let winningChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1); // Capitalize the first letter of the winning choice

            console.log(`You lose! ${winningChoice} beats ${humanChoice}.`);
            computerScore++;
        }
        return; // Exit the function
    }


    // Instantiate choice variables for human and computer
    let humanChoice; // Variable to store human user's choice
    let computerChoice; // Variable to store computer's choice

    // Loop for 5 rounds of the game, calling new choices for each round
    for (let i = 0; i < 5; i++) { 
        console.log(`Round ${i + 1}`); // Log the round number

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        // Log the current scores after each round
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