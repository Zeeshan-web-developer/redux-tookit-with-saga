import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import {store} from './store/store';
import Counter from './Counter';
import './App.css';
import OtpInput from 'react-otp-input';

function App() {
  const [otp, setOtp] = React.useState('')
  const handleChange = (value) => {
    setOtp(value)
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
