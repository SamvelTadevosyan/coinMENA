import { githubTrendingDevelopersRequest, githubTrendingRepositoriesRequest } from "./services/githubApiService";
import { Dispatch } from "redux";
import { GithubUser, GithubRepository } from "./interfaces/githubInterface";

export const actions = {
  SET_REPOSITORIES: 'SET_REPOSITORIES',
  SET_DEVELOPERS: 'SET_DEVELOPERS',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
};

export function setRepositories(
  dispatch: Dispatch,
  data: GithubRepository[],
): void {
  dispatch({
    type: actions.SET_REPOSITORIES,
    data,
  });
}

export function setDevelopers(
  dispatch: Dispatch,
  data: GithubUser[],
): void {
  dispatch({
    type: actions.SET_DEVELOPERS,
    data,
  });
}

export async function loadRepositories(dispatch: Dispatch) {
  loading(dispatch, true);
  try {
    const data = await githubTrendingRepositoriesRequest();
    setRepositories(dispatch, data);
    loading(dispatch, false);
  } catch (err) {
    error(dispatch, err as Error);
  }
}

export async function loadDevelopers(dispatch: Dispatch) {
  loading(dispatch, true);
  try {
    const data = await githubTrendingDevelopersRequest();
    setDevelopers(dispatch, data);
    loading(dispatch, false);
  } catch (err) {
    error(dispatch, err as Error);
  }
}

export function loading(dispatch: Dispatch, loading: boolean): void {
  dispatch({ type: actions.LOADING, loading });
}

export function error(dispatch: Dispatch, err: Error): void {
  dispatch({
    type: actions.ERROR,
    error: err.message,
  });
}
