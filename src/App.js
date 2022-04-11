import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import {store} from './store/store';
import Counter from './Counter';
import './App.css';

function App() {
  useEffect(() => {
   navigator.serviceWorker.register('sw.js');
Notification.requestPermission(function(result) {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('Notification with ServiceWorker');
    });
  }
});
   
    notify();
  }, [])

  const notify = () => {
    if (window.Notification && Notification.permission === "granted") {
      const notification = new Notification("Hi there!");
    }
  }
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
