
import { configureStore } from '@reduxjs/toolkit';
import coursesSlice from './coursesSlice';
import cartSlice from './cartSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    courses:coursesSlice,
    cart:cartSlice,
    user:userSlice,
  },
});

export default store;
