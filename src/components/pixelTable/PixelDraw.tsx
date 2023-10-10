import { useState } from "react";
import PixelTable, { stringMatrix } from "./PixelTable";

export default function PixelDraw() {

    const [pickedColor, SETpickedColor] = useState("black")

    const originalPixels: stringMatrix = [
        ["blue", "red", "green", "red", "blue", "red", "green", "red", "blue", "red", "blue", "red", "green", "red", "blue", "red", "blue", "red", "green", "red", "blue"],
        ["red", "green", "red", "blue", "red", "green", "red", "blue", "blue", "blue", "red", "green", "red", "blue", "blue", "blue", "red", "green", "red", "blue", "blue"],
        ["green", "green", "red", "red", "green", "red", "blue", "blue", "blue", "red", "green", "red", "blue", "blue", "blue", "red", "green", "red", "blue", "blue", "blue"],
        ["blue", "red", "green", "red", "blue", "red", "green", "red", "blue", "red", "blue", "red", "green", "red", "blue", "red", "blue", "red", "green", "red", "blue"],
        ["red", "green", "red", "blue", "red", "green", "red", "blue", "blue", "blue", "red", "green", "red", "blue", "blue", "blue", "red", "green", "red", "blue", "blue"],
        ["green", "green", "red", "red", "green", "red", "blue", "blue", "blue", "red", "green", "red", "blue", "blue", "blue", "red", "green", "red", "blue", "blue", "blue"]
    ];

    // Generate list of fibonacci numbers
    const x = 1;
    const goldenNumbers = [1, x]
    for (let i = 3; goldenNumbers[goldenNumbers.length] < originalPixels.length; i++) {
        goldenNumbers.push(goldenNumbers[i - 1] + goldenNumbers[i - 2])
    }

    // Function to check if a number is a Fibonacci number
    function isFibonacci(num: number) { return goldenNumbers.find(eachEntry => (eachEntry === num)) }

    const pixelPlan: stringMatrix = originalPixels
    let pixelCount = 0;
    let previousValue = "";
    for (let row = 0; row < originalPixels.length; row++) {
        const thisRow = originalPixels[row];
        for (let col = 0; col < thisRow.length; col++) {
            const pixelIndex = pixelCount++;
            const originalValue = originalPixels[row][col]
            let newValue = originalValue;
            // Fibonacci places should be orange
            if (isFibonacci(pixelIndex)) { newValue = "orange" } else
                if (originalValue === previousValue) { newValue = pickedColor }
            pixelPlan[row][col] = newValue
            // Now that we've decided everything
            previousValue = originalValue
        }
    }

    return (<PixelTable pixelPlan={pixelPlan} cellSize={"50px"} setColor={SETpickedColor} />)
}
