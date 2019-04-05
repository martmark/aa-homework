import { RECEIVE_SEARCH_GIPHYS, REQUEST_SEARCH_GIPHYS } from '../actions/giphy_actions';

const giphysReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      return action.giphys;
    case REQUEST_SEARCH_GIPHYS:
      return action;
    default:
      return state;
  }
};

export default giphysReducer;