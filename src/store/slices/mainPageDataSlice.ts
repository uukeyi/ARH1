import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IDataState {
   text: string;
   src?: string;
}
const initialState: IDataState = {
   text: "",
   src: "",
};

export const mainPageDataSlice = createSlice({
   name: "mainPageDataSlice",
   initialState,
   reducers: {},
});

export const {} = mainPageDataSlice.actions;
export default mainPageDataSlice.reducer;
