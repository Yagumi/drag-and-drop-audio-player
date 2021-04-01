import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface IInitialState {
  dropDepth: number;
  inDropZone: boolean, 
  playList: File[],
}

const initialState: IInitialState = {
  dropDepth: 0,
  inDropZone: false,
  playList: [],
}

const dragAndDropSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setDropDepth: (state, action: PayloadAction<number>) => {
      state.dropDepth = action.payload;
    },
    setInDropZone: (state, action: PayloadAction<boolean>) => {
      state.inDropZone = action.payload;
    },
    addSong: (state, action: PayloadAction<File[]>) => {
      console.log(action.payload)
      // state.playList.concat(action.payload)// needed a normalizing date
    }
  },
});

export const selectDropDepth = (state: RootState) => state.dragAndDrop.dropDepth;
export const selectInDropZone = (state: RootState) => state.dragAndDrop.inDropZone;
export const selectPlayList = (state: RootState) => state.dragAndDrop.playList;

const {actions, reducer} = dragAndDropSlice;
export const { setDropDepth, setInDropZone, addSong } = actions;
export { reducer as dragAndDropReducer }