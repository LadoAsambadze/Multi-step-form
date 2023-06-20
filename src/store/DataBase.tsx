import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasePayload {
  property: string;
  value: string;
}
const base = {
  name: "",
  email: "",
  number: "",
  mode: "",
  price: "",
};
const dataBase = createSlice({
  name: "base",
  initialState: base,
  reducers: {
    setBase: (state, action: PayloadAction<BasePayload>) => {
      state[action.payload.property] = action.payload.value;
    },
  },
});

export const { setBase } = dataBase.actions;

export default dataBase.reducer;
