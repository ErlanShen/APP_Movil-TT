import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/miRutaSlice";

export const store = configureStore({
  reducer: {
    miRuta: taskReducer
  }
})