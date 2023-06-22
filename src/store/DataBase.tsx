import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BaseType {
  [key: string]: string | number | null;
  name: string;
  email: string;
  number: number;
  mode: string;
  price: number;
  "Online service": "string" | null;
  local: string | null;
  profile: string | null;
}

type door = keyof BaseType;

interface BasePayload {
  property: door;
  value: string | null;
}

const base: BaseType = {
  name: "",
  email: "",
  number: 0,
  mode: "",
  price: 0,
  "Online service": null,
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
    updateLocal: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setBase, updateLocal } = dataBase.actions;

export default dataBase.reducer;
