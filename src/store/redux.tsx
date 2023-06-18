import { configureStore } from "@reduxjs/toolkit";
import PageNum from "./PageNum";

const store = configureStore({
  reducer: {
    page: PageNum,
  },
});

export default store;
