import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// ! PAYLOAD ACTION ТИПИЗИРУЕТ PAYLOAD
import {
  createDiscussionQuestion,
  getDiscussionQuestions,
} from '../actions/discussionQuestionsAction';
interface IQuestionState {
  title: string;
  id: number | null;
  description: string;
  categoryId: number | null;
  isDeleted: boolean;
}
interface IQuestionsArrayState {
  questions: any[];
  // ! НУЖНО БУДЕТ ТИПИЗИРОВАТЬ СТЕЙТ ДЛЯ ТЕСТА ОСТАВИЛ ПОКА ЧТО БЕЗ ТИПИЗАЦИИ (IQuestionState[])

  error?: boolean;
  errorMessage?: string;
}
const initialState: IQuestionsArrayState = {
  questions: [
    {
      title: '',
      id: null,
      description: '',
      categoryId: null,
      isDeleted: false,
    },
  ],
};

export const discussionQuestionsSlice = createSlice({
  name: 'discussionQuestionsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDiscussionQuestions.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.questions = action.payload.data;
    });
    builder.addCase(getDiscussionQuestions.rejected, (state, action) => {
      state.error = true;
      console.log(action.error.message);
      // state.errorMessage = action.error
      // console.log(action.error.message);
    });
    // getDiscussionQuestions
    builder.addCase(createDiscussionQuestion.fulfilled, (state, action: PayloadAction<any>) => {
      state.questions = [...state.questions, action.payload];
    });
    builder.addCase(createDiscussionQuestion.rejected, (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
    });
  },
});

export const {} = discussionQuestionsSlice.actions;
export default discussionQuestionsSlice.reducer;
