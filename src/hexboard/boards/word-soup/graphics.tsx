function drawSoupBowl() {
	let polygonString = ""
	let tempCoordinate = { "x": 0, "y": 0 }
	// Find the X and Y of each corner - shift the bowl by 60 degrees
	console.log(bowlRadius)
	cornerAngles.forEach((element: number) => {
		let theta = element * Math.PI / 180 + Math.PI / 6
		tempCoordinate.x = Math.floor(canvasCenter.x + bowlRadius * Math.cos(theta))
		tempCoordinate.y = Math.floor(canvasCenter.y + bowlRadius * Math.sin(theta))
		if (polygonString != "") { polygonString += " " }
		polygonString += `${tempCoordinate.x},${tempCoordinate.y}`
	});
	gameBoard.polygon(polygonString)
		.attr('id', 'bowl')
}

function drawSpoon() {

	// let enterText="enter"
	// let clearText="clear"
	spoonBack = gameBoard.path(spoonBacker).move(400, 50).attr('id', 'spoonBack').transform({ scale: 3 })
	spoonBack.attr('class', `player${currentPlayer}`)
	spoon = gameBoard.path(spoonPath).move(400, 50).attr('id', 'spoon').transform({ scale: 3 }).on('click', function () { submitButtonClicked() })

	spoon.attr(
		'class', `player${currentPlayer}`)

	spoonWord = gameBoard.text(currentword).attr('class', `player${currentPlayer}`)
	spoonWord.move(650, 30)
		.on('click', function () { submitButtonClicked() })
		.attr('id', 'submitButton')
	// .transform({ scale: 3 })
	// .fill("white")

	let buttonCenter: never[] = []
	buttonCenter.x = canvasCenter.x+ (bowlRadius)*0.8
	buttonCenter.y = canvasCenter.y + (bowlRadius)*0.75

	gameBoard.circle(200).cx(buttonCenter.x).cy(buttonCenter.y).attr('id', 'sandwichCircle')
	gameBoard.path(sandwichPath).fill('red').move(buttonCenter.x, buttonCenter.y-45).attr('id', 'crackers').transform({ scale: 10 }).stroke("none").attr('class', `pasta`).on('click', function () { clearTurn() })
	gameBoard.text("CLEAR").move(buttonCenter.x-65, buttonCenter.y+25).attr('id', 'crackersText').attr('class', 'pasta').on('click', function () { clearTurn() })
}