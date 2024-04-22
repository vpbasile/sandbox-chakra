import random_face from './hex-soup.js'

// <> Main


  // ---------------------------------------------
  // <><> Define the deice pool
  // ---------------------------------------------
// Initialize stuff
const myDice1 = `rstqwx`
const myDice2 = `eaozjy`
const dicePool = [
	'aaafrs', 'aaeeee', 'aafirs', 'adennn', 'aeeeem', myDice1,
	'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst', myDice2,
	'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst', myDice2,
	'ceiilt', 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor', myDice1,
	'dhlnor', 'dhlnor', 'eiiitt', 'emottt', 'ensssu', myDice2,
	'fiprsy', 'gorrvw', 'iprrry', 'nootuw', 'ooottu', myDice1
	, 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor', myDice2, myDice1
]

const board_generator:string[] = []; //2-dimensional array for storing original dice information
const current_track:string[] = []; // keep track of visited dice in selected order
const clickable:string[] = []; // those clickable dice
const submitted = new Set(); // store submitted words

const results = []

function shuffle(arr) {//function to shuffle the dice
	let j, temp;
	for (let i = arr.length; i > 0; i--) {
		j = Math.floor(Math.random() * i);
		temp = arr[i - 1];
		arr[i - 1] = arr[j];
		arr[j] = temp;
	}
}

function generateLetters() {
	let dice:string;
	for (let i = 0; i < dicePool.length; i++) {
		dice = dicePool[i].toUpperCase().split('');
		board_generator.push(dice);
	}
	shuffle(board_generator);
	// console.log(`Newly-shuffled board board_generator`)
	// console.table(board_generator);
	for (let i = 0; i < board_generator.length; i++) {
		// console.log(`Looping through the board_generator`)
		// console.table(board_generator[i]);
		const dice_arr = board_generator[i];
		let upside = random_face(dice_arr);
		if (upside === 'Q') upside = 'QU';
		results.push(upside)
	}
}
generateLetters()

// The blueprint stores the shape of the board
const bluePrint = {
	"name": "Bee Spelling Board",
	"description": "A bee spelling board",
	"author": "Vincent",
	"version": "1.0",
	"hexList": [
		{ "q": 0, "r": 0, "classes": "" },
		{ "q": -1, "r": 0, "classes": "" },
		{ "q": -1, "r": 1, "classes": "" },
		{ "q": 0, "r": -1, "classes": "" },
		{ "q": 0, "r": 1, "classes": "" },
		{ "q": 1, "r": -1, "classes": "" },
		{ "q": 1, "r": 0, "classes": "" },
		{ "q": -2, "r": 0, "classes": "" },
		{ "q": -2, "r": 1, "classes": "" },
		{ "q": -2, "r": 2, "classes": "" },
		{ "q": -1, "r": -1, "classes": "" },
		{ "q": -1, "r": 2, "classes": "" },
		{ "q": 0, "r": -2, "classes": "" },
		{ "q": 0, "r": 2, "classes": "" },
		{ "q": 1, "r": -2, "classes": "" },
		{ "q": 1, "r": 1, "classes": "" },
		{ "q": 2, "r": -2, "classes": "" },
		{ "q": 2, "r": -1, "classes": "" },
		{ "q": 2, "r": 0, "classes": "" },
		{ "q": -3, "r": 0, "classes": "" },
		{ "q": -3, "r": 1, "classes": "" },
		{ "q": -3, "r": 2, "classes": "" },
		{ "q": -3, "r": 3, "classes": "" },
		{ "q": -2, "r": -1, "classes": "" },
		{ "q": -2, "r": 3, "classes": "" },
		{ "q": -1, "r": -2, "classes": "" },
		{ "q": -1, "r": 3, "classes": "" },
		{ "q": 0, "r": -3, "classes": "" },
		{ "q": 0, "r": 3, "classes": "" },
		{ "q": 1, "r": -3, "classes": "" },
		{ "q": 1, "r": 2, "classes": "" },
		{ "q": 2, "r": -3, "classes": "" },
		{ "q": 2, "r": 1, "classes": "" },
		{ "q": 3, "r": -3, "classes": "" },
		{ "q": 3, "r": -2, "classes": "" },
		{ "q": 3, "r": -1, "classes": "" },
		{ "q": 3, "r": 0, "classes": "" }
	]
}

// Run the constructor for each hex
bluePrint.hexList.forEach((hex) => { new Hex(hex.q, hex.r, hex.classes); })

constructAllHexes()

// Now that the board is initialized, draw it for the first time
drawView()
firstload = false
console.log(`Created ${Hexes.length} hexes`)
currentWordDisplay.classList.toggle(currentColor)
currentWordDisplay.innerText = placeholderText()
document.getElementById("player0history").innerText = "-"
document.getElementById('player1history').innerText = "-"
beginTurn()