import * as api from '../../api/index';
import { GET_ALL } from '../types';

export const getMarvels = () => async (dispatch) => {
  try {
    const data = await api.fetchMarvels();
    const action = { type: GET_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
