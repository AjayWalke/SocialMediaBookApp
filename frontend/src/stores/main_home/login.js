import { createSlice } from '@reduxjs/toolkit';

const loginStore = createSlice({
  name: 'useDetails',
  initialState: {
    user: null,
  },
  reducers: {
    setUserDetails(state, action) {
      state.user = action.payload;
    },
    clearUserDetails(state) {
      state.user = null;
    },
  },
});

export const { setUserDetails, clearUserDetails } = loginStore.actions;

export default loginStore.reducer;
