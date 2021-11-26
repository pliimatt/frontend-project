import './css/App.css';
import React, {useState} from 'react';
import IdleGameComp from './components/IdleGameComp';
import CV from './components/CV';

function App () {
  const [gameState, setGameState] = useState(false);
  return (
    <div className="App">
      <CV />
      <button onClick={() => setGameState(!gameState)}>{gameState ? "Hide" : "Show"} idle game</button>
      {gameState ? <IdleGameComp /> : <div></div>}
    </div>
  );
}

export default App;

