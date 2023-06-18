import { createSlice } from "@reduxjs/toolkit";

const pageNum = createSlice({
  name: "page",
  initialState: {
    Number: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.Number = action.payload;
    },
  },
});

export const { setPage } = pageNum.actions;

export default pageNum.reducer;
