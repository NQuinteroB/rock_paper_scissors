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

getUserHand('rock');
