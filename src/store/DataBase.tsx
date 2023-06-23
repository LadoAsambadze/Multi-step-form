import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BaseType {
  [key: string]: string | number | null;
  name: string | null;
  email: string;
  number: string;
  mode: string;
  price: number;
  Online_service: string;
  Larger_storage: string;
  Customizable_profile: string;
}

type door = keyof BaseType;

interface BasePayload {
  property: door;
  value: string | null;
}

const base: BaseType = {
  name: "",
  email: " ",
  number: " ",
  mode: "",
  price: 0,
  Online_service: "",
  Larger_storage: "",
  Customizable_profile: "",
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
