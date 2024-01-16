// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userinfo: null,
  },
  reducers: {
    setUserinfo: (state, action) => {
      state.userinfo = action.payload;
    },
    removeUserinfo: (state) => {
      state.userinfo = null;
    },
    
  },
});

export const { setUserinfo,removeUserinfo} = userSlice.actions;

export default userSlice.reducer;
