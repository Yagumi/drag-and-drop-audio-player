import React from 'react'
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
    console.log(files)
    const reader = new FileReader();
    const url = reader.readAsDataURL(files[0]);
    console.log(url)

    if (files && files.length > 0) {
      // const existingFiles = playList.map(f => f.name)
      // files = files.filter(f => !existingFiles.includes(f.name))

      // dispatch(dispatch(addSong(files)));
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
