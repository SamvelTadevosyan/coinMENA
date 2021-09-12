import React from 'react';
import { createUseStyles } from 'react-jss';
import { Icon } from '../components/Icon';
import { GithubRepository } from '../interfaces/githubInterface';
import { Colors } from '../styles/colors';
import { IconLink } from "../components/IconLink";

interface RepositoryProps {
  item: GithubRepository;
}

interface BuiltBy {
  url: string,
  avatar: string,
}

export const useStyles = createUseStyles({
  repository: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    fontSize: 12,
    borderBottom: `1px solid ${Colors.borderPrimary}`,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  image: {
    marginRight: 20,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  desc: {
    marginTop: 10,
  },
  hr: {
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: 'blue',
  },
  footerSection: {
    display: 'flex',
    marginTop: 14,
  },
  footerItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 16,
  },
  builder: {
    marginLeft: 5,
    '& img': {
      borderRadius: '50%',
      height: 20,
      width: 20,
    },
  },
});

export function Repository(props: RepositoryProps) {
  const { repositoryName, username, url, totalStars, language, description, builtBy } = props.item
  console.log('Log ::: props ::: ', props);
  const classes = useStyles();
  return (
    <div className={classes.repository}>
      <IconLink url={url} value={`${username}/${repositoryName}`} />
      <p className={classes.desc}>
        {description}
      </p>
      <div className={classes.footerSection}>
        <div className={classes.footerItem}>{language}</div>
        <div className={classes.footerItem}>
          <IconLink iconName="star" url={`https://github.com/${username}/${repositoryName}/stargazers`} value={totalStars} />
        </div>
        <div className={classes.footerItem}>
          <IconLink iconName="fork" fill="#8b949e" url={`https://github.com/${username}/${repositoryName}/network/members.${repositoryName}`} value={totalStars} />
        </div>
        <div className={classes.footerItem}>
          Build By
          {builtBy.map(({avatar, url}: BuiltBy) => {
            return (
                <a className={classes.builder} rel="noopener noreferrer" href={url}>
                  <img src={avatar} alt=""/>
                </a>
            )
          })}
        </div>
      </div>
    </div>
  );
}
