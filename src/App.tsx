import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { SystemState } from './store/system/types'
function App() {
  const user = useSelector<SystemState, SystemState['userName']>((state => state.userName))
  const isLogged = useSelector<SystemState, SystemState['loggedIn']>((state => state.loggedIn))
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{isLogged}</h1>
    </div>
  );
}

export default App;
