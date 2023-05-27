import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk<
   any,
   string,
   { rejectValue?: string }
>("categoriesSlice/getCategories", async (path, { rejectWithValue }) => {
   try {
      const response = await axios.get(
         "https://jsonplaceholder.typicode.com/posts"
      );
      return response;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});
