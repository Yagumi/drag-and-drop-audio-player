import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { dragAndDropReducer } from '../features/drag-and-drop/dragAndDropSlice';

export const store = configureStore({
  reducer: {
    dragAndDrop: dragAndDropReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
