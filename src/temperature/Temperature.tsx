import { bump, widthHalf } from "./settings";

type propsType = { measure: number, tempKey: string, color: string, label: string }

export default function Temperature(props: propsType) {
    const measure = props.measure;
    const tempKey = props.tempKey;
    const color = props.color;
    const label = props.label;
    
    // The measure is in celcius
    const farenheit = measure * 9 / 5 + 32;
    const yCoord = -measure;
    return <g fontSize={'6px'}>
        <line id={tempKey} stroke={color} x1={-40} y1={yCoord} x2={20} y2={yCoord} />
        <text x={-widthHalf / 2} y={yCoord + bump} textAnchor="end" alignmentBaseline="middle" fill={color}>{label}</text>
        <text x={25} y={yCoord + bump} textAnchor="start" alignmentBaseline="middle" fill={color}>{measure.toFixed(0)}</text>
        <text x={50} y={yCoord + bump} textAnchor="start" alignmentBaseline="middle" fill={color}>{farenheit.toFixed(0)}</text>
    </g>
}