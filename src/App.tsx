import React from 'react';
import './App.css';

import { DragAndDrop } from './features/drag-and-drop/DragAndDrop';
import { Player } from './features/player/Player';

function App() {
  return (
    <div className="App">
      <h1>React drag and drop component</h1>
      <DragAndDrop />
      <Player />
    </div>
  );
}

export default App;
