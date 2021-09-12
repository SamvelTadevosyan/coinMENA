import React from 'react';
import { createUseStyles } from 'react-jss';
import { Icon } from '../components/Icon';
import { IconLink } from '../components/IconLink';
import { GithubUser } from '../interfaces/githubInterface';
import { Colors } from '../styles/colors';

interface UserInterface {
  item: GithubUser;
}

export const useStyles = createUseStyles({
  block: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    borderBottom: `1px solid ${Colors.borderPrimary}`,
  },
  userBlock: {
    display: 'flex',
    width: '33.33%',
    flexDirection: 'row',
  },
  imageBlock: {
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    borderRadius: '50%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'blue'
  },
  icon: {
    marginRight: 5
  },

  repoBlock: {
    display: 'flex',
    flexDirection: 'column',
    width: '33.33%',
    fontSize: 12,
    marginBottom: 4,
  },
  popularRepo: {
    display: 'flex',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  repoName: {
    display: 'flex',
  },
  iconRepo: {
    fill: '#8b949e',
  },
  iconFire: {
    fill: '#bc4c00',
  },
  repoDescription: {

  },
});

export function User(props: UserInterface) {
  console.log('Log ::: props ::: ', props);
  const { avatar, url, name, username, popularRepository } = props.item;
  const classes = useStyles();
  // @ts-ignore
  return (
    <div className={classes.block}>
      <div className={classes.userBlock}>
        <div className={classes.imageBlock}>
          <img className={classes.image} src={avatar} width="48" height="48" />
        </div>
        <div>
          <div className={classes.title} >
            <a target='_blank' rel="noopener noreferrer" href={url}>{name}</a>
          </div>
          <div className={classes.row}>
            {username}
          </div>
        </div>
      </div>
      <div className={classes.repoBlock}>
        <div className={classes.popularRepo}>
          <div className={classes.iconFire}><Icon name='fire' width='16px' height='16px' /></div>
          Popular Repo
        </div>
        <IconLink url={popularRepository.url} value={popularRepository.repositoryName} />
        <p className={classes.repoDescription}>
          {popularRepository.description}
        </p>
      </div>
    </div>
  );
}
