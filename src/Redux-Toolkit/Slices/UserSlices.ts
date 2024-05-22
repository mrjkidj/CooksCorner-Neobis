import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserDataState {
  isAuth: boolean;
  accessToken: string;
  refreshToken: string;
  userId: number;
  email: string;
}

const initialState: IUserDataState = {
  isAuth: false,
  accessToken: "",
  refreshToken: "",
  userId: 0,
  email: "",
};

export const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserDataState>) => {
      const { accessToken, refreshToken, userId, email } = action.payload;
      state.isAuth = true;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.userId = userId;
      state.email = email;
    },
    logout: (state) => {
      state.isAuth = false;
      state.accessToken = "";
      state.refreshToken = "";
      state.userId = 0;
      state.email = "";
    },
  },
});

export const { login, logout } = userDataSlice.actions;
export default userDataSlice.reducer;
