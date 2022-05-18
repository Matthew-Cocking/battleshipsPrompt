//Ideally would randomise ship positions however for this task I have set locations.
let playerGrid = [
  0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
];

let computerGrid = [
  0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 
  2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 
  2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 
  2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 
  2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

//variable declaration
let row;
let column;
//generate a random guess for the computer within the size of the array.
let computerGuess = Math.floor(Math.random() * playerGrid.length);

window.alert(
  "Welcome to battleships! \nThe objective is to destroy the enemy battleships before they destroy yours. \nYou will be prompted to guess a location on a 10x10 grid where rows are decided with a letter and columns are targeted using numbers. \nGuess between letters (A-J) and numbers (0-9) \nFor example: D0"
);

//Loop through this Do while loop until either the player or the computer wins.
do {
  let guess = window.prompt("Select Coordinates: (Format: A0, J9, E5)\n");
  if (guess.charAt(2)) {
    alert("Invalid Coordinates! Please try again.\nFormat: C5 / A1 / J9");
  } else {
    column = guess.charAt(1);
    switch (guess.charAt(0)) {
      default:
        alert("Invalid Coordinates! Please try again. \nFormat: C5 / A1 / J9");
      case "A":
      case"a":
        row = 0;
        column = guess.charAt(1);
        break;
      case "B":
      case "b":
        row = 1;
        break;
      case "C":
      case "c":
        row = 2;
        break;
      case "D":
      case "d":
        row = 3;
        break;
      case "E":
      case "e":
        row = 4;
        break;
      case "F":
      case "f":
        row = 5;
        break;
      case "G":
      case "g":
        row = 6;
        break;
      case "H":
      case "h":
        row = 7;
        break;
      case "I":
      case "i":
        row = 8;
        break;
      case "J":
      case "j":
        row = 9;
    }
  }

 //Make row = to the position of the guess in the array, if row = 0 then dont account for the row
 //because "07" wouldn't be a valid array position.
  if (row === 0) {
    guess = column;
  } else {
    guess = 0;
    guess = row += column;
  }

  //Switch statement - check against the array position that the user has specified via guess
  switch (computerGrid[guess]) {
    case 0:
      computerGrid.splice(guess, 1, 3);
      alert("Target Missed!");
      break;
    case 1:
      computerGrid.splice(guess, 1, 3);
      alert("Battleship Hit!");

      break;
    case 2:
      computerGrid.splice(guess, 1, 3);
      alert("Destroyer Hit!");
      break;
    case 3:
      alert("This Location has already been destroyed.");
      break;
  }

  // 
  switch (playerGrid[computerGuess]) {
    case 3:
      computerGuess = Math.floor(Math.random() * playerGrid.length);
      break;
    case 0:
      alert("Enemy Shot Missed!");
      break;
    case 1:
      alert("Your Battleship has been hit!");
      playerGrid.splice(computerGuess, 1, 3);
      break;
    case 2:
      alert("Your Destroyer has been hit!");
      playerGrid.splice(computerGuess, 1, 3);
      break;
  }


  //check if computer has won.
  if (!playerGrid.includes(1) && !playerGrid.includes(2)) {
    alert("All your battleships have been destroyed.\n You lose!");
    window.location.reload();
  }

  //check if player has won.
  if (!computerGrid.includes(1) && !computerGrid.includes(2)) {
    alert("Congratulations you destroyed all enemy battleships!\n You Win!");
    window.location.reload();
  }
} while (
  (computerGrid.includes(1) || computerGrid.includes(2)) &&
  (playerGrid.includes(1) || playerGrid.includes(2))
);