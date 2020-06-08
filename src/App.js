import React from 'react';
import Pomodoro from './components/Pomodoro'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='title'>Pomodoro Clock</div>
      <Pomodoro />
      <footer>by Tatiana Ochoa 2020</footer>
    </div>
  );
}

export default App;
