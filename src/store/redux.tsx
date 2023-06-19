import { configureStore } from "@reduxjs/toolkit";
import PageNum from "./PageNum";
import activeButton from "./Active";
import dataBase from "./DataBase";

const store = configureStore({
  reducer: {
    page: PageNum,
    active: activeButton,
    base: dataBase,
  },
});

export default store;
