import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMainPageData = createAsyncThunk<
   any,
   string,
   { rejectValue?: string }
>("mainPageDataSlice/getMainPageData", async (path, { rejectWithValue }) => {
   try {
      const response = await axios.get(
         "https://jsonplaceholder.typicode.com/todos/1"
      );
       // ! ТУТ НУЖНА БАЗОВАЯ ССЫЛКА НА АПИ 
      return response;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});
