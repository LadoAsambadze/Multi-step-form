import { createSlice } from "@reduxjs/toolkit";

const dataBase = createSlice({
  name: "base",
  initialState: {
    Object: { name: "", email: "", phone: "" },
  },
  reducers: {
    setBase: (state, action) => {
      state.Object = action.payload;
    },
  },
});

export const { setBase } = dataBase.actions;

export default dataBase.reducer;
