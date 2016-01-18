import React from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import { Clicker } from '../components/clicker';
import { SimpleClicker } from '../components/simpleclicker';
import { createStore } from 'redux';
import { counter } from '../reducers/counter';

const store = createStore(counter);

export const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Clicker />
          <SimpleClicker />
          <Link to="/about">About</Link>
        </div>
      </Provider>
    );
  },
});
