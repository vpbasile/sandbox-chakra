import { Box, Heading } from '@chakra-ui/react';
export default function SvgDraw() {

    // Types
    type colorT = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black' | 'white'
    type coordinateT = { x: number, y: number }
    type myLineT = { start: coordinateT, angle: number, length: number, color?: colorT, width?: string }

    // Constants
    const colorOrder: colorT[] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white']
    const sizeOrder: string[] = ['13px', '8px', '5px', '3px', '2px', '1px', '1px']
    const canvasSize: number = 1500
    const seed: coordinateT = { x: canvasSize / 2, y: canvasSize / 2 }
    const root: myLineT = { start: seed, angle: 3*Math.PI / 4, length: 200, color: colorOrder[5], width: '21px' };
    const rootMirror: myLineT = { start: seed, angle: -Math.PI / 4, length: 200, color: colorOrder[5], width: '21px' };

    // Function to draw a line on the canvas
    // Parameters:
    // - zLine: an object representing the line with properties start (coordinates), angle, and length
    // - color: the color of the line (default is 'black')
    // - width: the width of the line (default is '1px')
    // - key: an optional key for React to identify the element
    function drawLine(zLine: myLineT, key?: number): JSX.Element {
        const { start, angle, length } = zLine
        let { color, width } = zLine
        console.log('color:', color)
        const { x: x1, y: y1 } = start
        const x2 = x1 + length * Math.cos(angle)
        const y2 = y1 + length * Math.sin(angle)
        // If color is not provided, default to white
        if (!color) color = 'white'
        // If width is not provided, default to 1px
        if (!width) width = '1px'
        return <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: color, strokeWidth: width }} key={`line${key}`} />
    }

    // Function to generate branches from a given line
    // Parameters:
    // - line: the line from which branches are generated
    // Returns an array of two new lines representing the branches
    function makeBranches(line: myLineT, color: colorT, width: string): myLineT[] {
        const { start, angle, length } = line
        const { x: x1, y: y1 } = start
        const x2 = x1 + length * Math.cos(angle)
        const y2 = y1 + length * Math.sin(angle)
        const newLength = length * 0.75
        const newAngle1 = angle + Math.PI / 4
        const newAngle2 = angle - Math.PI / 4
        const newLine1 = { start: { x: x2, y: y2 }, angle: newAngle1, length: newLength, color: color, width: width }
        const newLine2 = { start: { x: x2, y: y2 }, angle: newAngle2, length: newLength, color: color, width: width }
        return [newLine1, newLine2]
    }

    // Function to generate a tree structure of lines
    // Parameters:
    // - root: the root line from which the tree starts
    // - depth: the depth of the tree (number of levels)
    // Returns an array of lines representing the tree
    function makeTree(root: myLineT, depth: number, color: colorT, width: string): myLineT[] {
        if (depth === 0) return []
        const branches = makeBranches(root, color, width)
        const children = branches.flatMap(branch => makeTree(branch, depth - 1, color, width))
        return [root, ...children]
    }

    // An example tree to test the functions
    const exampleTree = [
        ...makeTree(root, 13, colorOrder[0], sizeOrder[5]),
        ...makeTree(root, 8, colorOrder[1], sizeOrder[4]),
        ...makeTree(root, 5, colorOrder[2], sizeOrder[3]),
        ...makeTree(root, 3, colorOrder[3], sizeOrder[2]),
        ...makeTree(root, 2, colorOrder[4], sizeOrder[1]),
        ...makeTree(root, 1, colorOrder[5], sizeOrder[0]),
        root,
        // Add a mirror image of the tree to the exampleTree
        rootMirror,
        ...makeTree(rootMirror, 13, colorOrder[0], sizeOrder[5]),
        ...makeTree(rootMirror, 8, colorOrder[1], sizeOrder[4]),
        ...makeTree(rootMirror, 5, colorOrder[2], sizeOrder[3]),
        ...makeTree(rootMirror, 3, colorOrder[3], sizeOrder[2]),
        ...makeTree(rootMirror, 2, colorOrder[4], sizeOrder[1]),
        ...makeTree(rootMirror, 1, colorOrder[5], sizeOrder[0]),
    ]



    return (<Box>
        <Heading as={'h2'}>SVG Draw</Heading>
        {/* <Slider width="200px" defaultValue={4} size="lg" label="slider - lg" /> */}
        <Box border={'2px solid wthie'}>
            <svg width={canvasSize} height={canvasSize}>
                {/* Iterate over exampleTree, drawing each line if a matching line has not already been drawn */}
                {exampleTree.map((eachLine, index) => drawLine(eachLine, index))}
            </svg>
        </Box>
    </Box>)
}