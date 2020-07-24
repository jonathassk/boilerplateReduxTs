import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";
import { SystemState } from './store/system/types'
function App() {
  const user = useSelector<SystemState, SystemState['userName']>((state => state.userName))
  return (
    <div className="App">
      <h1>{user}</h1>
    </div>
  );
}

export default App;
