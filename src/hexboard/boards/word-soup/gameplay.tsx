// ---------------------------------------------
// <><> Handling gamelplay
// ---------------------------------------------

export function handleClick(hexKey: string | number) {
    const clickedHex = Hexes[hexKey]
    const hexLetter = clickedHex.letter
    // console.log(`Clicked hex at q:${clickedHex.q} r:${clickedHex.r}`)
    switch (hexLetter) {
        case undefined:
            console.log(`Clicked empty hex`)
            break
        case 'enter':
            console.log(`Clicked enter`)
            finishTurn()
            break
        case 'clear':
            console.log(`Clicked clear`)
            clearTurn()
            break
        default:
            if (clickedHex.classes == "hex clickable") {
                // The hex has a letter and is clickable, so perform the action, so claim the hex for the current player
                successfulClick(clickedHex)
            }

    }
}