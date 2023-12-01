import { Select } from '@chakra-ui/react'

export type optionType = { value: number, label: string }

type propsType = {
    options: optionType[];
};

export default function MySelect(props: propsType) {

    const options = props.options;
    return (<Select title='Select something' placeholder='Select option' defaultValue={3}>
        {options.map(thisOption => <option key={thisOption.value} value={thisOption.value}>{thisOption.label}</option>)}
    </Select>)
}