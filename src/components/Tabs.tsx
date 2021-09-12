import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { Colors } from '../styles/colors';

interface TabProps {
  options: {
    title: string;
    value: string;
  }[];
  value: string;
  onChange: (value: string) => void;
}

const useStyles = createUseStyles({
  tabs: {
    display: 'flex',
    flexDirection: 'row',
  },
  tab: {
    padding: '5px 16px',
    border: `1px solid ${Colors.borderPrimary}`,
    borderRight: 0,
    userSelect: 'none',
    color: Colors.textPrimary,
    cursor: 'pointer',
    fontSize: 14,
    '&:first-child': {
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6, 
    },
    '&:last-child': {
      borderTopRightRadius: 6,
      borderBottomRightRadius: 6, 
      borderRight: `1px solid ${Colors.borderPrimary}`,
    },
    '&[data-selected=true]': {
      backgroundColor: Colors.backgroundAccent,
    },
  },
});

export function Tabs(props: TabProps) {
  const classes = useStyles();

  const onChangeCreator = useCallback((value: string) => () => {
    props.onChange(value);
  }, []);

  return (
    <div className={classes.tabs}>
      {props.options.map((option) => {
        return (
          <div
            className={classes.tab}
            data-selected={option.value === props.value}
            onClick={onChangeCreator(option.value)}
          >
            {option.title}
          </div>
        );
      })}
    </div>
  );
}
