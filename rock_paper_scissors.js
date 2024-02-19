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

function getComputerHand() {
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}


function determineWinner(userHand, ComputerHand) {
  if (userHand === ComputerHand) {
    return "It's a tie";
  }
  if (
    (userHand === 'rock' && ComputerHand === 'scissors') ||
    (userHand === 'paper' && ComputerHand === 'rock') ||
    (userHand === 'scissors' && ComputerHand === 'paper' )
    ) {
    return 'user won';
  } else {
    return 'computer won';
  }
};
