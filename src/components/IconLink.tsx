import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { Colors } from '../styles/colors';
import {Icon} from "./Icon";

interface RepoName {
  iconName?: string,
  value: string,
  fill?: string,
  url: string,
}

const useStyles = createUseStyles({
  repoName: {
    display: 'flex',
    alignItems: 'center',
  },
  iconRepo: {
    marginRight: 5,
    fill: '#8b949e',
  },
});

export function IconLink(props: RepoName) {
  const { value, url, fill="#8b949e", iconName='repo' } = props;
  const classes = useStyles();

  return (
    <a className={classes.repoName} target='_blank' rel="noopener noreferrer" href={url}>
      <div className={classes.iconRepo}><Icon fill={fill} name={iconName} width='16px' height='16px' /></div>
      {value}
    </a>
  );
}
