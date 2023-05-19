import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDiscussionQuestions = createAsyncThunk<
   any,
   string,
   { rejectValue?: string }
>("mainPageDataSlice/getMainPageData", async (path, { rejectWithValue }) => {
   try {
      const response = await axios.get(
         "https://jsonplaceholder.typicode.com/posts"
      );
      return response;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});
