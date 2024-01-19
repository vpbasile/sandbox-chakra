
import { Box } from '@chakra-ui/react';
import { field } from '../../db-man/DBTable';
import { empty } from '../../db-man/dbvb_helpers';
import deck from './deck-poker.json'

export default function CardDisplay() {

	const shuffleDeck = () => {
		setTopCard(null);
		const shuffledDeck = [...deck];
		for (let i = shuffledDeck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
		}
		// <> Before we update the state, build a table for displaying the cards
		// <> DATA <> Translation function
		const displayListTemp = shuffledDeck.map((eachCard) => { return [`${eachCard.rank}`, `${eachCard.suit}`]; });
		setDisplayList(displayListTemp);
		// <>
		setDeck(shuffledDeck);
	};

	const dealCard = () => {
		if (deck.length === 0) {
			console.log('No more cards in the deck!');
			return;
		}

		const [dealtCard, ...remainingDeck] = deck;
		setDeck(remainingDeck);
		const displayListTemp = remainingDeck.map((eachCard) => { return [`${eachCard.rank}`, `${eachCard.suit}`]; });
		setDisplayList(displayListTemp);

		setTopCard(dealtCard);
		// console.log(`Dealt card: ${dealtCard.rank} of ${dealtCard.suit}`);
	};

	const fields: field[] = [
		{
			matchID: "rank",
			labelText: `Rank`,
			type: "string",
			defaultValue: "Rank",
			listTable: "ranks",
			changeFunction: empty,
			automatic: false
		},
		{
			matchID: "suit",
			labelText: `Suit`,
			type: "string",
			defaultValue: "Suit",
			listTable: undefined,
			changeFunction: empty,
			automatic: false
		}
	];
	return (
		<Box>
			<Box>
				<button onClick={shuffleDeck}>Shuffle Deck</button>
				<button onClick={dealCard}>Deal Card</button>
				<button onClick={() => SETshowDeck(!showDeck)}>Hide/show deck</button>
				<Box>
					{topCard && `${topCard?.rank} of ${topCard?.suit}`}	</Box>
			</Box>
			<Box>
				{/* editable={false} */}
				{/* {showDeck && displayList && <Table dataContents={displayList} fields={fields} newRowF={empty} />} */}
			</Box>
		</Box>
	);
}

