import { Box, Tr, Td, Table, Tbody, TableContainer } from "@chakra-ui/react";
import { Dispatch } from "react";

export type stringMatrix = string[][];
export default function PixelTable(props: { pixelPlan: stringMatrix; cellSize: string; setColor: Dispatch<string> }) {

    const pixelPlan = props.pixelPlan;
    const cellSize = props.cellSize;
    const setColor = props.setColor;

    let separateCount = 0;

    // Collect a list of all the colors used
    const colorList: string[] = []
    pixelPlan.forEach((thisRow: string[]) => {
        thisRow.forEach((thisColor: string) => {
            if (!colorList.find(eachmember => eachmember === thisColor)) colorList.push(thisColor)
        })
    })


    const conditionedPixels = pixelPlan.map(eachRow=>eachRow.map(eachCol=>eachCol+".900"))

    const pixelArray = conditionedPixels.map((eachrow, rowIndex) => {
        return (
            <Tr key={rowIndex}>
                {eachrow.map((eachPixelColor, colIndex) => {
                    const thisNumber = separateCount++
                    // if (isFibonacci(thisNumber)) { eachPixelColor = "orange" }
                    return (<Td key={`${rowIndex}-${colIndex}`} width={cellSize} height={cellSize} bg={eachPixelColor} onClick={() => setColor(eachPixelColor)}>
                        {thisNumber}
                    </Td>)
                }
                )
                }
            </Tr>
        );
    });



    return (
        <Box>
            <TableContainer>
                <Table>
                    <Tbody>
                        {pixelArray}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}