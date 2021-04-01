import React, { useReducer } from 'react';
import { useAppSelector } from './app/hooks';
import './App.css';

import { DragAndDrop } from './features/drag-and-drop/DragAndDrop';
import { Player } from './features/player/Player';
import { Audio } from './features/player/Audio';

import { selectPlayList } from './features/drag-and-drop/dragAndDropSlice';

function App() {
  const songsList = useAppSelector(selectPlayList)
  return (
    <div className="App">
      <h1>React drag and drop component</h1>
      <DragAndDrop />
      <div>
        {
          songsList.map(item => <p>{item.name}</p>)
        }
      </div>
    </div>
  );
}

export default App;
