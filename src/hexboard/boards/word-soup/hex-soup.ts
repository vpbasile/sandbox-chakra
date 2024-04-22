function placeholderText() { return `It is ${players[currentPlayer].color}'s turn. Touch a letter to begin.` }

// Gameplay global variables
const players = [
	{ "id": 0, "color": "purple", "score": 0, "history": [] },
	{ "id": 1, "color": "blue", "score": 0, "history": [] }
]
let currentPlayer = 0
let currentTurn = 1
let currentColor = players[currentPlayer].color
const wordHistory = []
let currentword = ""
let currentWordScore = 0
let lastCLickedHex: { setClasses: (arg0: string) => void } | null = null
const letterScores = {
	"A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "QU": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10
}
const orientationBowl = 'flat-top'
let bowlRadius: number
let spoon: { attr: (arg0: string, arg1: string) => { (): any; new(): any; attr: { (arg0: string, arg1: string): void; new(): any } } }
let spoonWord: { move: (arg0: number, arg1: number) => { (): any; new(): any; on: { (arg0: string, arg1: () => void): { (): any; new(): any; attr: { (arg0: string, arg1: string): void; new(): any } }; new(): any } }; text: (arg0: string) => void; attr: (arg0: string, arg1: string) => void }

// Stuff for checking the entered words in a dictionary
const apiKey = "df21cec5-0310-49d9-be45-0e5d29bb553c"
const apiName = "thesaurus"
let url




function successfulClick(clickedHex: { setClasses: (arg0: string) => void; letter: any; isNeighbor: (arg0: any) => any }) {
	// Keep track of the letters so that you can rewind mistakes
	// !!!!! Still didnt do that

	// Remove the lastclick class from the other letter
	if (lastCLickedHex != null) { lastCLickedHex.setClasses(`${currentColor}`) }
	// Now update the new last clicked hex
	lastCLickedHex = clickedHex
	clickedHex.setClasses(`${currentColor} lastclick`)
	// Add the letter to the word
	currentLetter = clickedHex.letter
	currentword += currentLetter
	currentWordScore += letterScores[currentLetter]
	// Update the word display
	currentWordDisplay.innerText = currentword
	spoonWord.text(currentword)

	Hexes.forEach((element: { classes: string | string[]; q: any; r: any; setClasses: (arg0: string) => void }) => {
		if (element.classes.includes(currentColor)) {
			// Do nothing
		} else {
			if (clickedHex.isNeighbor(element)) {
				console.log(`neighbor found at ${element.q}, ${element.r}`)
				element.setClasses(`clickable`)
			} else { element.setClasses(`locked`) }
		}
	})

	// Lock every hex that is not a neighbor of the clicked hex
	Hexes.forEach((element: any) => {
		if (!clickedHex.isNeighbor(element)) {
		}
	})

	gameBoard.clear()
	drawView()

	// // Check if the word is in the dictionary
	// if (dictionary.includes(current_word)) {
	// 	// The word is in the dictionary, so make the word display clickable in order to enter
	// }
	// else {
	// 	// The word is not in the dictionary, so do nothing
	// }
	// Lock all the neighbors
}

function appendToHistory(player: number, word: string) {
	// Add the word to the history
	players[player].history.push(word)
	// console.log(tempstring)
	const tempItem = document.createElement("li")
	tempItem.innerText = `${currentword}(${currentWordScore})`
	document.getElementById(`player${currentPlayer}history`).appendChild(tempItem)
	// Update the history display
	// drawHistory()
}

async function submitButtonClicked() {
	if (currentword.length > 0) { 
		spoon.attr('stroke', 'cornflowerblue').attr('class', `black`)
		spoonBack.attr('fill', 'cornflowerblue').attr('class', `black`)
		await dictionaryCheck(currentword) 
	}
}
async function dictionaryCheck(word: string) {
	url = `https://www.dictionaryapi.com/api/v3/references/${apiName}/json/${word}?key=${apiKey}`
	const myObject = await fetch(url);
	const myText = await myObject.json();
	if ((myText[0].meta != undefined)) {
		spoon.attr('stroke', `green`)
		console.log(`${word} is in the dictionary`)
		finishTurn()
	} else {
		spoon.attr('stroke', `red`)
		console.log(`${word} is not in the dictionary`)
		nope()
	}
}

function beginTurn() {
	spoon.attr('class', `player${currentPlayer}`)
	spoonBack.attr('class', `player${currentPlayer}`)
}


function finishTurn() {
	generateLetters()
	// Remove the used letters
	Hexes.forEach((element: { classes: string | string[]; assignLetter: () => void }) => {
		// If the hex was used, replace it with a new random letter
		if (element.classes.includes(currentColor)) {
			element.assignLetter()
		}
	});
	console.log(`${currentTurn} The ${players[currentPlayer].color} player enterd ${currentword} for ${currentWordScore} points.`)
	players[currentPlayer].score += currentWordScore
	const tempstring = `player${currentPlayer}score`
	document.getElementById(tempstring).innerText = players[currentPlayer].score
	// historyDisplay.innerHTML += `<li class="${currentColor}">(${currentWordScore})${currentword}</li>`
	appendToHistory(currentPlayer, currentword) // Add the word to the history
	wordHistory[currentTurn] = { "word": currentword, "color": currentColor }
	currentTurn++
	// Switch the current player to the next player
	currentPlayer = (currentPlayer + 1) % players.length
	currentWordDisplay.classList.toggle(currentColor)
	currentColor = players[currentPlayer].color
	spoonWord.attr('class', currentColor)
	currentWordDisplay.classList.toggle(currentColor)
	// Clear the current word

	currentWordDisplay.innerText = placeholderText()
	currentword = ""
	currentWordScore = 0
	// Clear the last clicked hex
	lastCLickedHex = null
	clearTurn()
	// Reset the board
	// scoredisplay.innerHTML = scoreDisplayString
	drawView()
	beginTurn()
	currentWordDisplay.innerText = placeholderText()
}

function nope() {
	console.log(`Nope.`)
	clearTurn()
}

function clearTurn() {
	// Clear the current word
	// currentWordDisplay.innerText = placeholderText
	currentword = ""
	currentWordScore = 0
	// Clear the last clicked hex
	lastCLickedHex = null
	Hexes.forEach((element: { setClasses: (arg0: string) => void }) => { element.setClasses(`clickable`) })

	// Reset the board
	drawView()
	// currentWordDisplay.innerText = placeholderText
}

function clearCurrentWord() {
	currentword = ""
	// currentWordDisplay.innerText = placeholderText()
}

/* Functions for generating the board */
export function board(results: any[]) {//generate a random set of 36 dice and store them in board_generator
	const board = []; // For storing the dice
	let dice_arr = [];
	let upside;
	shuffle(board_generator);
	// console.log(`Newly-shuffled board board_generator`)
	// console.table(board_generator);
	for (let i = 0; i < board_generator.length; i++) {
		// console.log(`Looping through the board_generator`)
		// console.table(board_generator[i]);
		dice_arr = board_generator[i];
		upside = random_face(dice_arr);
		if (upside === 'Q') upside = 'QU';
		results.push(upside)
	}
	//render board on HTML

}

export const generateBoard = () => {
	let dice;
	// console.log(`List length: ${list.length}`)
	for (let i = 0; i < list.length; i++) {
		dice = list[i].toUpperCase().split('');
		board_generator.push(dice);
	}
	// console.table(board_generator);
}

export function shuffle(arr: string | any[]) {//function to shuffle the dice
	let j, temp;
	for (let i = arr.length; i > 0; i--) {
		j = Math.floor(Math.random() * i);
		temp = arr[i - 1];
		arr[i - 1] = arr[j];
		arr[j] = temp;
	}
}

export function random_face(arr: any[]) {//random a upside face from a dice
	const index = Math.floor(Math.random() * 6);
	const upside_face = arr[index];
	return upside_face;
}

// Make the enter button hex
const submitHex = new Hex(2, 2, "enter submit-button")
submitHex.letter = "enter"
// { "q": 2, "r": 2, "classes": "black" },

// Make the clear button hex
const clearHex = new Hex(4, -2, "clear")
clearHex.letter = "clear"