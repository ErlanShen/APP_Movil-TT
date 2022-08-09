import { createSlice } from "@reduxjs/toolkit";

const initialState = [
     {
          id: "1",
          title: "Enfoque",
          Selection: "1",
     },
     {
          id: "2",
          title: "Enfoque",
          Selection: "2",
     }
]

export const miRutaSlice = createSlice({
     name: "miruta",
     initialState,
     reducers: {

     }
})

export default miRutaSlice.reducer