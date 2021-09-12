import { connect } from 'react-redux';
import { loadDevelopers, loadRepositories } from '../actions';
import { State } from '../interfaces/stateInterface';
import { Main } from './Main';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State) => {
  return {
    developers: state.developers,
    repositories: state.repositories,
    loading: state.loading,
    error: state.error,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadRepositories: () => {
      return loadRepositories(dispatch);
    },
    loadDevelopers: () => {
      return loadDevelopers(dispatch);
    },
  };
}

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
