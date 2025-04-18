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