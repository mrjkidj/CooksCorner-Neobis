import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlices";
import recipeSlice from "./Slices/RecipeSlice";

const rootReducer = combineReducers({
  auth: userSlice,
  recipe: recipeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;