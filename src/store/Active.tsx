import { createSlice } from "@reduxjs/toolkit";

const activeButton = createSlice({
  name: "active",
  initialState: {
    Boolean: false,
  },
  reducers: {
    setActive: (state, action) => {
      state.Boolean = action.payload;
    },
  },
});

export const { setActive } = activeButton.actions;

export default activeButton.reducer;
