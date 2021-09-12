import { State } from "../interfaces/stateInterface";
import { AnyAction } from "redux";
import { actions } from "../actions";

const initialState: State = {
  repositories: [],
  developers: [],
  loading: false,
  error: '',
};

function rootReducer(state: State = initialState, action: AnyAction): State {
  switch (action.type) {
    case actions.SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.data,
        error: '',
      };

    case actions.SET_DEVELOPERS:
      return {
        ...state,
        developers: action.data,
        error: '',
      };

    case actions.LOADING:
      return { ...state, loading: action.loading };

    case actions.ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}

export default rootReducer;
