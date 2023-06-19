import { configureStore } from "@reduxjs/toolkit";
import PageNum from "./PageNum";
import activeButton from "./Active";

const store = configureStore({
  reducer: {
    page: PageNum,
    active: activeButton,
  },
});

export default store;
