import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import '../../hex.css';
import { hexagon } from '../../hexDefinitions';
import WordSoupBoard from './board';
import './color-tomato.css';
import { shuffle } from './soup-functions';

export type newHex = hexagon & { uid: number, value: number, clickFunction: (hexId: number) => void, active: boolean }

const generateHexCoordinates = () => {
    const usefulClasses = "hex clickable";
    let idGen = 0;
    const hexRoster: newHex[] = [];
    for (let q = -3; q <= 3; q++) {
        for (let r = -3; r <= 3; r++) {
            if (Math.abs(q + r) <= 3) {
                const uid = idGen++;
                const newHex = { uid: uid, q: q, r: r, cssClasses: usefulClasses, hexText: "*", value: 2, clickFunction: () => { }, active: true };
                hexRoster.push(newHex);
            }
        }
    }
    return hexRoster;
}

export default function WordSoupGame() {

    const letterBag: string[] = shuffle("aaaaaaaaabbbcccddddeeeeeeeeeeeeeeffffggghhiiiiiiiiijkllllllllmmnnnnnnnnoooooooooppqrrrrrrsssstttttttuuuuvvwwxyyz".split(''));
    const [letterSupply, setLetterSupply] = useState(letterBag)
    const initialHexRoster = generateHexCoordinates();
    const [hexRoster, setHexRoster] = useState(initialHexRoster);

    const populateHexes = () => {
        console.log('Letter Supply', letterSupply)
        const remaining: string[] = [...letterSupply];
        const updatedHexRoster = hexRoster.map((hex) => {
            console.log('Updating hex', hex.uid, hex.hexText)
            if (hex.hexText === "*") {
                // Draw a letter from the supply, removing it from the supply
                const newLetter = remaining.shift() || "*";
                console.log('Drew', newLetter);
                console.log('remaining', remaining);
                hex.hexText = newLetter;
            }
            return hex;
        })
        setLetterSupply(remaining); // Update the letter supply state
        setHexRoster(updatedHexRoster);
    };

    return (
        <>
            <Box id='DebugDisplay'>
                <button onClick={() => populateHexes()}>Populate</button>
            </Box>
            <Box>
                <WordSoupBoard hexRoster={hexRoster}>
                </WordSoupBoard>
            </Box>
        </>
    );
}
