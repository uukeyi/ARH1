import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// ! PAYLOAD ACTION ТИПИЗИРУЕТ PAYLOAD
import { getDiscussionQuestions } from "../actions/discussionQuestionsAction";
interface ICategoryState {
   title: string;
   id: number | null;
   description: string;
   categoryId: number | null;
   isDeleted: boolean;
   img: string;
}
interface ICategoriesArrayState {
   categories: any[];
   // ! НУЖНО БУДЕТ ТИПИЗИРОВАТЬ СТЕЙТ ДЛЯ ТЕСТА ОСТАВИЛ ПОКА ЧТО БЕЗ ТИПИЗАЦИИ (ICategoryState[])
   error?: boolean;
   errorMessage?: string;
}
const initialState: ICategoriesArrayState = {
   categories: [
      {
         title: "",
         id: null,
         description: "",
         categoryId: null,
         isDeleted: false,
         img : '',
      },
   ],
};

export const categoriesSlice = createSlice({
   name: "categoriesSlice",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getDiscussionQuestions.fulfilled, (state, action) => {
         state.categories = action.payload.data;
      });
      builder.addCase(getDiscussionQuestions.rejected, (state, action) => {
         state.error = true;
         // state.errorMessage = action.error
         // console.log(action.error.message);
      });
      // getDiscussionQuestions
   },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
