
import { createSlice } from '@reduxjs/toolkit';

export const coursesSliceSlice = createSlice({
  name: 'coursData',
  initialState: {
    data: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = coursesSliceSlice.actions;

export default coursesSliceSlice.reducer;
