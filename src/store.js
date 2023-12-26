import { configureStore, createSlice } from "@reduxjs/toolkit";

const userName = createSlice({
  name: "userName",
  initialState: "추복영",
  reducers: {
    nameChangeFn(state) {
      return "추보경";
    },
  },
});

export const { nameChangeFn } = userName.actions;

const userPhoneNumber = createSlice({
  name: "userPhoneNumber",
  initialState: "010-3899-0102",
});

const productList = createSlice({
  name: "productList",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    userName: userName.reducer,
    userPhoneNumber: userPhoneNumber.reducer,
    productList: productList.reducer,
  },
});
