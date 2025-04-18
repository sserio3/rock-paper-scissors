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

// Test: Check if the getComputerChoice function returns a valid choice
const computerChoice = getComputerChoice()
console.log(computerChoice);

// Validate the result
if (["rock", "paper", "scissors"].includes(computerChoice)) {
  console.log("TEST PASSED: Valid output.");
} else {
  console.log("TEST FAILED: Invalid output.");
}
