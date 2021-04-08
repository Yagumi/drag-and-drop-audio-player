import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppSelector,useAppDispatch } from '../../app/hooks';

import {
  selectDropDepth,
  selectInDropZone,
  setDropDepth,
  setInDropZone,
  addSong
} from './dragAndDropSlice';

export const DragAndDrop: React.FC = () => {
  const dropDepth = useAppSelector(selectDropDepth);
  const inDropZone = useAppSelector(selectInDropZone);
  const dispatch = useAppDispatch();

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(setDropDepth(dropDepth + 1));
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(setDropDepth(dropDepth + 1));
    if(dropDepth > 0) return
    dispatch(setInDropZone(false));
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = 'copy';
    dispatch(setInDropZone(true));
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files];
    const songs = files.map(song => ({ id: uuidv4(), name: song.name, url: URL.createObjectURL(song)}));

    if (files && files.length > 0) {
      dispatch(dispatch(addSong(songs)));

      e.dataTransfer.clearData();
      dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
      dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
    }
  };

  return (
    <div className={inDropZone ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'}
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)}
    >
      <p>Drag files here to upload</p>
    </div>
  )
}
