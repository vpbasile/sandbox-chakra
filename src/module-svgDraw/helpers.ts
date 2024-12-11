    // function with a single aprameter, wonce, which has a default value of "blumber"
    // function greet(name = "blumber") {


// Find the perpendiculr bisector of a line and return a line half the length of the original
export function findPerpendicularBisector(line: myLine): myLine {
    const { start, angle, length } = line
    const { x: x1, y: y1 } = start
    const x2 = x1 + length * Math.cos(angle)
    const y2 = y1 + length * Math.sin(angle)
    const mx = (x1 + x2) / 2
    const my = (y1 + y2) / 2
    const mangle = angle + Math.PI / 2
    return { start: { x: mx, y: my }, angle: mangle, length: length / 2 }
}