import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';
import Home from '../components/Home';
import AppComponent from '../components/AppComponent';
import Details from '../components/Details';
import Header from '../components/Header';

describe('Render App Component Correctly', () => {
  test('Hero App component', () => {
    const home = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});

describe('Root Component render', () => {
  test('Marvel Home component', () => {
    const root = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <App>
              <Home />
            </App>
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(root).toMatchSnapshot();
  });
});

describe('Main details Component render', () => {
  test('Marvel Hero Detail component', () => {
    const details = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <App>
              <Details />
            </App>
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(details).toMatchSnapshot();
  });
});

describe('Header Component render', () => {
  test('Marvel Hero Header component', () => {
    const header = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <App>
              <AppComponent>
                <Header />
                <Home />
                <Details />
              </AppComponent>
            </App>
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});

describe('Search function render', () => {
  test('Render Search function for home and Header', () => {
    const header = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <App>
              <AppComponent>
                <Header />
                <Home search="IronMan" />
              </AppComponent>
            </App>
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
