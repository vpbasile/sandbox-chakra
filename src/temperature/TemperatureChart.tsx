import { Box } from "@chakra-ui/react";
import { useState } from "react";
import TemperatureRange from "./Range";
import Temperature from "./Temperature";
import { height, heightHalf, rangeNeeded, width, xMin, yMin } from "./settings";


export default function TemperatureChart() {

    const [testValue, SETtestValue] = useState(0);

    const thingsToShow = [
        "chartMin", { measure: rangeNeeded.min, color: "black", label: "Chart Min" },
        "chartMax", { measure: rangeNeeded.max, color: "black", label: "Chart Max" },
        "freezing", { measure: 0, color: "blue", label: "Freezing" },
        "boiling", { measure: 100, color: "red", label: "Boiling" },
        "chicken", { measureFrom: 60, measureTo: 70, color: "orange", label: "Chicken" },
        "maillard", { measureFrom: 140, measureTo: 165, color: "brown", label: "Maillard Reaction" },

    ]

    let keyGen = 0;
    return <Box>
        <svg height={heightHalf * 2}
            viewBox={`${xMin} ${rangeNeeded.min + testValue} ${width} ${height}`}
            style={{ opacity: "0.8" }}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* A vertical line through the origin */}
            <line id="centerLine" stroke="black" x1={0} y1={yMin} x2={0} y2={height} />
            {/* Draw the thingsToShow */}
            {thingsToShow.map((thing, index) => {
                if (typeof thing === "string") {
                    return null;
                }
                if (thing.measure) {
                    return <Temperature key={++keyGen} measure={thing.measure} tempKey={`thing-${index}`} color={thing.color} label={thing.label} />;
                }
                if (thing.measureFrom && thing.measureTo) {
                    return <TemperatureRange key={++keyGen} measureFrom={thing.measureFrom} measureTo={thing.measureTo} rangeKey={`thing-${index}`} color={thing.color} label={thing.label} />
                }
                return null;
            })}
        </svg>
        <input type="range" min={-height} max={height} value={testValue} onChange={(e) => SETtestValue(parseInt(e.target.value))} />
        {/* Display testValue */}
        <Box>{testValue}</Box>
    </Box>
}