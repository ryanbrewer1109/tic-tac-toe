var counter = 0;
var gameCounter = 1;
var currentPlayer ="X";	
var gameOver = false;
var isDraw = false;

// Define Reset button
let btn = document.getElementById('reset');
btn.addEventListener("click", resetGames);

document.addEventListener("DOMContentLoaded", function() {
	// Global variable for turn counter


	// Add game functionality when a cell is single-clicked
	var cells = document.querySelectorAll('.cell');
	cells.forEach(function(cell) {
		addEventListener("click", cellClicked);
	}); // end forEach

}); // end DOMContentLoaded eventListener


// function to process funtionality when a cell is clicked
function cellClicked(e) {
	let value = e.target.innerHTML;
	// Click resets board if last click ended the current game
	if (gameOver) {
		return resetBoard();
	}


	// Only enter an X or O in a blank cell
	if (value == "") {
		counter++;
		// DEBUG:
		let turn = counter % 2;
		// modulusMsg = counter + " (counter) % 2 = " + turn); 
		// alert(modulusMsg);

		// X always goes first, then alternates with O
		if(turn == 1) {
			// DEBUG:
			// alert("OK, we'll mark an X here.");
			e.target.appendChild(document.createTextNode("X"));
			checkForWinner("X");
		} // end inner if 
		else {
			// DEBUG:			
			// alert("OK, we'll mark an O here.");
			e.target.appendChild(document.createTextNode("O"));
			checkForWinner("O");
		} // end inner else
	
	} // end outer if

//	if(gameOver) {
//		isDraw == true ? displayResults(drawMessage): displayResults(winnerMessage);
//	}

} // end function cellClicked

function checkForWinner(str) {
	let winnerMessage = "Game #" + gameCounter + ": " + str + " Wins!";
	let drawMessage = "Game #" + gameCounter + ": " + "It's a Draw.";
	// Store valies of completed cells in a String array  
	let completedCellsArr = [];
	cells = document.querySelectorAll('.cell');
	cells.forEach(function(cell) {
		completedCellsArr.push(cell.innerHTML);
	});

	// DEBUG:
	console.log(completedCellsArr);
	// Identical marks for any of the following groups of classesindicates a winner:
	// .bottom
	// .left
	// .right
	// (.top .middle) && (.bottom .middle) && .center
	// (.left .middle) && (.right .middle) && .center
	// (.top .left) && .center && (.bottom .right)
	// (.bottom .left) && .center && (.top .right)
	// .top

	if(str === completedCellsArr[0] && str ===  completedCellsArr[1] && str === completedCellsArr[2]){
		gameOver = true;
		gameCounter+=1;
		displayResults(winnerMessage);
	} // end if

	else if(str === completedCellsArr[3] && str ===  completedCellsArr[4] && str === completedCellsArr[5]){
		gameOver = true;
		gameCounter += 1;
		displayResults(winnerMessage);
	} // end if


	else if(str === completedCellsArr[6] && str ===  completedCellsArr[7] && str === completedCellsArr[8]){
		gameOver = true;
		gameCounter += 1;		
		displayResults(winnerMessage);
	} // end if


	else if(str === completedCellsArr[0] && str ===  completedCellsArr[3] && str === completedCellsArr[6]){
		gameOver = true;
		gameCounter += 1;		
		displayResults(winnerMessage);
	} // end if


	else if(str === completedCellsArr[1] && str ===  completedCellsArr[4] && str === completedCellsArr[7]){
		gameOver = true;
		gameCounter += 1;		
		displayResults(winnerMessage);
	} // end if


	else if(str === completedCellsArr[2] && str ===  completedCellsArr[5] && str === completedCellsArr[8]){
		gameOver = true;
		gameCounter += 1;		
		displayResults(winnerMessage);
	} // end if

	else if(str === completedCellsArr[0] && str ===  completedCellsArr[4] && str === completedCellsArr[8]){
		gameOver = true;
		gameCounter += 1;		
		displayResults(winnerMessage);
	} // end if


	else if(str === completedCellsArr[2] && str ===  completedCellsArr[4] && str === completedCellsArr[6]){
		gameOver = true;
		gameCounter += 1;		
		displayResults(winnerMessage);
	} // end if

	// Test for a DRAW condition
	else if (counter == 9) {
		gameOver = true;
		isDraw = true;
		gameCounter += 1;	
		displayResults(drawMessage);
	} // end else if		
} // end function 


// Add paragraph with message indicating winner (or a )
function displayResults(msg) {
	let h3 = document.createElement("h3");
	let h3Text = document.createTextNode(msg);
	h3.appendChild(h3Text);
	let board = document.getElementById("board");
	board.appendChild(h3);
}

function resetBoard() {
	// reset global variables
	counter = 0;
	gameOver = false;
	isDraw = false;

	// Remove results message
	let resultsMsg = document.getElementsByClassName('.board');
	resultsMsg.removeLastChild;
	// Erase all marks on the board
	cells = document.querySelectorAll('.cell');
	cells.forEach(function(cell) {
		cell.innerHTML='';
		});
}

// FIX THIS FUNCTION TO DELETE THE DYNAMICALLY-ADDED RESULT MESSAGES!
function resetGames() {
	resetBoard();
	while(gameCounter > 1) {
		let board = document.getElementById("board");
		board.removeChild(board.lastChild);
		gameCounter--;		
	}
	//gameCounter = 1;
} // end function
