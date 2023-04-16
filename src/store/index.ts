import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainPageDataSlice from "./slices/mainPageDataSlice";
export const store = configureStore({
   reducer: {
      mainPageData: mainPageDataSlice,
   },
   middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
