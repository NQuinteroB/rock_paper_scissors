// Create a variable with the options that the user has
const options = ['rock', 'paper', 'scissors'];

const getUserHand = (option) => {
// Turn the option to case insensitive
  const userHand = option.toLowerCase();
/* If the userHand is included in the options array return if not give a message to the user */
  if (options.includes(userHand)) {
    return userHand
  } else {
    return 'Please enter a valid option'
  }
};

// function to determine an option from the options array
function getComputerHand() {
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// function to determine the winner using logical operators
function determineWinner(userHand, computerHand) {
  if (userHand === computerHand) {
    return "It's a tie";
  }
  if (
    (userHand === 'rock' && computerHand === 'scissors') ||
    (userHand === 'paper' && computerHand === 'rock') ||
    (userHand === 'scissors' && computerHand === 'paper' )
    ) {
    return 'user won';
  } else {
    return 'computer won';
  }
};

// function to start the game and calling the other functions
function playGame(userChoice) {
  userChoice = getUserHand(userChoice);
  computerHand = getComputerHand();
  winner = determineWinner(userChoice, computerHand)
  return winner
}

playGame('rock');
