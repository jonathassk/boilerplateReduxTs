import React from 'react';
import './App.css';
import { useSelector} from "react-redux";
import { SystemState } from './store/system/types'

function App() {
  const user = useSelector<SystemState, SystemState["userName"]>((state) => state.userName)

  console.log(user)
  return (
    <div className="App">
      <p>{user}as</p>
    </div>
  );
}

export default App;
