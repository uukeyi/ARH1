import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// ! PAYLOAD ACTION ТИПИЗИРУЕТ PAYLOAD
import { getDiscussionQuestions } from "../actions/discussionQuestionsAction";
interface IQuestionState {
    title : string,
    id : number | null,
    description : string,
    categoryId : number | null,
    isDeleted : boolean,   

}
interface IQuestionsArrayState {
    questions : any[],
// ! НУЖНО БУДЕТ ТИПИЗИРОВАТЬ СТЕЙТ ДЛЯ ТЕСТА ОСТАВИЛ ПОКА ЧТО БЕЗ ТИПИЗАЦИИ (IQuestionState[])

    error? : boolean,
    errorMessage? : string
}
const initialState : IQuestionsArrayState  = {
    questions : [
        {
            title : '',
            id : null,
            description : '',
            categoryId : null,
            isDeleted : false
        }
    ]
}


export const discussionQuestionsSlice = createSlice({
    name: "discussionQuestionsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       builder.addCase(getDiscussionQuestions.fulfilled, (state, action) => {
          state.questions = action.payload.data
    
       });
       builder.addCase(getDiscussionQuestions.rejected, (state, action) => {
          state.error = true;
          // state.errorMessage = action.error
          console.log(action.error.message)
       });
       // getDiscussionQuestions
    },
 });
 
 export const {} = discussionQuestionsSlice.actions;
 export default discussionQuestionsSlice.reducer;
 