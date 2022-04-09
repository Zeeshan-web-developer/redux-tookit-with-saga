import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import './App.css';

function App() {
  

  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      <Counter />
      </header>
      </div>
    </Provider>
  );
}

export default App;
