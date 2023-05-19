import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainPageDataSlice from "./slices/mainPageDataSlice";
import discussionQuestionsSlice from "./slices/discussionQuestionsSlice";
import categoriesSlice from "./slices/categoriesSlice";
export const store = configureStore({
   reducer: {
      mainPageData: mainPageDataSlice,
      discussionQuestions : discussionQuestionsSlice,
      categoriesSlice : categoriesSlice
   },
   middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
