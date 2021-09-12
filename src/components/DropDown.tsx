import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';

interface DropDownItem {
	value: string;
	label: string;
}

interface DropDownProps {
	options: DropDownItem[];
	value: string;
	onChange: (value: string) => void;
}

const useStyles = createUseStyles({
	select: {
	  height: 46,
	  width: 100,
	  paddingLeft: 10,
	},
});

export function DropDown(props: DropDownProps) {
  const classes = useStyles();

	const changeHanlder = props.onChange;
	const onChange = useCallback((event: React.SyntheticEvent) => {
		const value = (event.target as HTMLInputElement).value;
		changeHanlder(value);
	}, [changeHanlder]);


	const dropDownItem = useCallback((item: DropDownItem) => {
		return (
			<option 
				key={item.value}
				value={item.value}
			>
				{item.label}
			</option>
		);
	}, []);

	return (
		<select
			onChange={onChange}
			className={classes.select}
			value={props.value}
		>
			{props.options.map(dropDownItem)}
		</select>
	);
}
