import { GET_ALL } from '../types';

const initialState = [];

const marvelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return [action.payload];
    default:
      return state;
  }
};

export default marvelsReducer;
