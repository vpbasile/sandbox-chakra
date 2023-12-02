import Player from "./player";
import deckMaster from "./deck-standard.json"
import { useState } from "react";
import DBTable, { fieldTuple } from "../../db-man/DBTable";
import { Box } from "@chakra-ui/react";
// import sun from "./sun.svg"
// import water from "./water.svg"
// import growth from "./growth.svg"

export default function Gameboard() {
	type cardRoster = number[];
	// Gameplay states
	const [drawPile, SETdrawPile] = useState(shuffle(deckMaster.map(each => each.uid)))
	const emptyHand: number[] = []
	const [player1hand, SETplayer1hand] = useState(emptyHand)

	// UI states
	const [showDeck, SETshowDeck] = useState(false);

	function shuffle(current: cardRoster): cardRoster {
		const newRoster = [...current];
		for (let i = newRoster.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newRoster[i], newRoster[j]] = [newRoster[j], newRoster[i]];
		}
		return newRoster;
	}
	const shuffleDrawPile = () => SETdrawPile(shuffle(drawPile));

	const drawCard = (num: number) => {
		console.log(num)
		const newRoster = [...drawPile]
		const drawnCard = newRoster.shift();
		if (drawnCard) {
			SETdrawPile(newRoster)
			const tempHand = [...player1hand]
			tempHand.unshift(drawnCard)
			SETplayer1hand(tempHand);
			return drawnCard
		}
		else return 0;
	}


	// DISPLAY Data definitions
	const fields: fieldTuple[] = [
		["rank", {
			matchID: "rank",
			labelText: `Rank`,
			type: "string",
			defaultValue: "Rank",
			listTable: "ranks",
			order: 1
		}],
		["suit", {
			matchID: "suit",
			labelText: `Suit`,
			type: "string",
			defaultValue: "Suit",
			listTable: undefined,
			order: 2
		}]
	];

	const displayList = drawPile.map((thisCardID) => {
		const cardInfo = deckMaster.find(card => card.uid === thisCardID)
		return [cardInfo?.rank, cardInfo?.suit]
	})

	// <> Main actions

	return <Box id="gameboard-display">
		<Player characterName={"Player 1"} pointTotal={0} hand={player1hand} deck={deckMaster} />
		{/* <CardDeck /> */}
		{/* <DiceRoller numDice={1} numSides={6} />
		<DiceRoller numDice={2} numSides={12} /> */}
		<Box>
			{/* <Image src={sun} alt={"sun"} width={100} className="bg-white bg-opacity-30"/>
			<Image src={water} alt={"water"} width={100} className="bg-white bg-opacity-30"/>
			<Image src={growth} alt={"growth"} width={100} className="bg-white bg-opacity-30"/> */}

			<Box>
				<button onClick={shuffleDrawPile}>Shuffle Deck</button>
				<button onClick={() => drawCard(1)}>Draw Card</button>
				<button onClick={() => SETshowDeck(!showDeck)}>Hide/show deck</button>
				<Box>Display a card here</Box>
			</Box>
			<Box>
				{/* editable={false} */}
				{showDeck && displayList && <DBTable dataContents={displayList} fields={fields} newRowF={empty} />}
			</Box>
		</Box>
	</Box>
}

function empty(arg0: unknown): void {
	throw new Error(`Function not implemented. arg0:${arg0}`);
}
