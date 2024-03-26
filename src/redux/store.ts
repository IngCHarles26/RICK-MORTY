import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./slices/charactersSlice";
import idSlice from "./slices/idSlice";
import pageSlice from "./slices/pageSlice";



export const store = configureStore({
  reducer:{
    character: charactersSlice,
    id: idSlice,
    page: pageSlice,
  }
})

export type TypeStore = ReturnType<typeof store.getState>;