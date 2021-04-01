import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState { 
  currentSong: string,
}

const initialState: IInitialState = {
  currentSong: '',
}

export const togglePlayPause = createAsyncThunk(
  'player/togglePlayPause',
  async (action: React.RefObject<HTMLAudioElement>) => {
    action.current?.paused ? action.current?.play() : action.current?.pause();
  }
)

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
  },
});


const {actions, reducer} = playerSlice;

// export const { togglePlayPause } = actions;
export { reducer as playerReducer }