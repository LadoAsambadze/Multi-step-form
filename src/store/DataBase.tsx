import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BaseType {
  [key: string]: string | number | null;
  name: string;
  email: string;
  number: number;
  mode: string;
  price: number;
  online: string | null;
  local: string | null;
  profile: string | null;
}

type door = keyof BaseType;

interface BasePayload {
  property: door;
  value: string;
}

const base: BaseType = {
  name: "",
  email: "",
  number: 0,
  mode: "",
  price: 0,
  online: null,
  local: null,
  profile: null,
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
