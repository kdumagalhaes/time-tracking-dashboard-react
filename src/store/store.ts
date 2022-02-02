import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const timeframe: string = "daily";

export const timeFrameSlice = createSlice({
  name: "timeframe",
  initialState: {
    timeframe,
  },
  reducers: {
    changeTimeframe: (state, action: PayloadAction<string>) => {
      state.timeframe = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    timeframe: timeFrameSlice.reducer,
  },
});

export const { changeTimeframe } = timeFrameSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
