import {
  GET_ROLE_START,
  GET_ROLE_SUCCESS,
  GET_ROLE_FAILED
} from '../actions/common';

const initialState = {
  isLoading: false,
  allRoles: []
};

/**
 * Common reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function commonManagement(state = initialState, action) {
  switch (action.type) {
    case GET_ROLE_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_ROLE_SUCCESS:
      return {
        ...state,
        allRoles: action?.payload,
        isLoading: false
      };
    case GET_ROLE_FAILED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
