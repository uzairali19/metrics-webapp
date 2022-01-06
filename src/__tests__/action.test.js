import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getMarvels } from '../redux/actions/marvels';
import marvelsReducer from '../redux/reducers/marvelReducer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore();

describe('Testing', () => {
  beforeEach(() => {
    store.clearActions();
  });
  n;
  test('Initial State', () => {
    const initialState = [];
    const expectedState = store.getActions();
    expect(marvelsReducer(initialState, {})).toEqual(expectedState);
  });
});

describe('Get Marvel Heros action tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches GET_ALL after a successfull API requets', () => {
    mock.onGet('api/heros').reply(200, { response: [{ item: 'item1' }, { item: 'item2' }] });
    store.dispatch(getMarvels()).then(() => {
      const expectedActions = [
        {
          type: 'GET_ALL',
          payload: [{ item: 'item1' }, { item: 'item2' }],
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Get heros action failed', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('Dispatches the correct action and payload', () => {
    mock
      .onGet('api/heros')
      .reply(404, { response: { code: 'MissingParameter', message: 'You must provide a hash.' } });
    store.dispatch(getMarvels()).then(() => {
      const expectedActions = [
        {
          type: 'GET_ALL',
          payload: { code: 'MissingParameter', message: 'You must provide a hash.' },
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
