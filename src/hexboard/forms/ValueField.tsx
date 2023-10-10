import React from 'react';
import { tableData } from '../../db-man/DBTable';
import { FormLabel, Input } from '@chakra-ui/react';
export default function ValueField(props: {
	fieldName: string,
	labelText: string,
	type: string,
	defaultValue: 'string | number | readonly string[] | undefined', onChangeFunction: any
}) {
	const fieldName = props.fieldName;
	const labelText = props.labelText;
	const type = props.type;
	const defaultValue = props.defaultValue;
	const onChangeFunction = props.onChangeFunction
	return (
		<React.Fragment>
			<FormLabel htmlFor={fieldName}>{labelText}</FormLabel>
			<Input name={fieldName} type={type} defaultValue={defaultValue} onChange={(e) => onChangeFunction(+e.target.value)} />
		</React.Fragment>
	)
}