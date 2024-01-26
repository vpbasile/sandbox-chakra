import Temperature from './Temperature';
import { rangeRectWidth } from './settings';

type propsType = { measureFrom: number, measureTo: number, rangeKey: string, color: string, label: string }

export default function TemperatureRange(props: propsType) {
    const measureFrom = props.measureFrom;
    const measureTo = props.measureTo;
    const rangeKey = props.rangeKey;
    const color = props.color;
    const label = props.label;

    return <g fontSize={'6px'}>
        <Temperature measure={measureFrom} tempKey={`${rangeKey}-from`} color={color} label={label} />
        <Temperature measure={measureTo} tempKey={`${rangeKey}-to`} color={color} label={label} />
        <rect id={rangeKey} x={-rangeRectWidth} y={-measureTo} width={rangeRectWidth} height={measureTo - measureFrom} fill={color} fillOpacity={0.2} />
        {/* <rect id={rangeKey} x={-widthHalf} y={yCoordFrom} width={10} height={yCoordTo - yCoordFrom} fill={color} fillOpacity={0.2} />
        <text fontSize={'5px'} x={-widthHalf / 2} y={yCoordTo + bump} textAnchor="end" alignmentBaseline="middle" fill={color}>{label}</text> */}
    </g>
}