import React, { useCallback, useEffect } from 'react';
import { Repository } from './Repository';
import { GithubRepository, GithubUser } from '../interfaces/githubInterface';
import { useHistory, useParams } from 'react-router';
import { User } from './User';
import { createUseStyles } from 'react-jss';
import { Colors } from '../styles/colors';
import { Tabs } from '../components/Tabs';

interface MainProps {
  repositories: GithubRepository[];
  developers: GithubUser[];
  loading: boolean;
  error: string;
  loadRepositories: () => void;
  loadDevelopers: () => void;
}

interface RouterParams {
  tab: string;
}

export const useStyles = createUseStyles({
  container: {
    color: Colors.textSecondary,
  },
  header: {
    padding: '40px 16px',
    background: Colors.backgroundSecondary,
    textAlign: 'center',
    borderBottom: `1px solid ${Colors.borderPrimary}`,
    '& h1': {
      color: Colors.textPrimary,
      paddingBottom: 8,
    },
  },
  contentContainer: {
    maxWidth: 1012,
    margin: '0 auto',
    padding: 40,
  },
  content: {
    border: `1px solid ${Colors.borderPrimary}`,
    borderRadius: 6,
  },
  panel: {
    backgroundColor: Colors.backgroundSecondary,
    borderBottom: Colors.borderPrimary,
    padding: 16,
  },
  loading: {
    padding: 16,
    textAlign: "center",
  },
});

function getTabOptions() {
  return [
    {
      title: 'Repositories',
      value: 'repositories',
    },
    {
      title: 'Developers',
      value: 'developers',
    },
  ];
}

export function Main(props: MainProps) {
  const classes = useStyles();
  const params = useParams<RouterParams>();
  const history = useHistory();

  useEffect(() => {
    if (params.tab === 'developers') {
      props.loadDevelopers();
    } else {
      props.loadRepositories();
    }
  }, [params.tab]);

  const onTabChange = useCallback((tab: string) => {
    history.push(`/${tab}`);
  }, []);

  const renderRepositoriesTab = useCallback(() => {
    return props.repositories && props.repositories.map((repository: GithubRepository) => {
      return <Repository key={repository.url} item={repository} />
    });
  }, [props.repositories]);

  const renderDevelopersTab = useCallback(() => {
    console.log('Log ::: props.developers ::: ', props.developers);
    return props.developers && props.developers.map((user: GithubUser) => {
      return <User key={user.username} item={user} />
    });
  }, [props.developers]);

  const renderTab = useCallback((tab: string) => {
    if (props.loading) {
      return (
        <div className={classes.loading}>Loading</div>
      );
    }
    if (tab === 'developers') {
      return renderDevelopersTab();
    }
    return renderRepositoriesTab();
  }, [props.loading]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Trending</h1>
        <div>See what the GitHub community is most excited about today.</div>
      </div>
      <div>{props.error}</div>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <div className={classes.panel}>
            <Tabs
              options={getTabOptions()}
              value={params.tab || "repositories"}
              onChange={onTabChange}
            />
          </div>
          {renderTab(params.tab)}
        </div>
      </div>
    </div>
  );
}
