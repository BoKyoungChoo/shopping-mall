import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "추복영", age: 27 },
  reducers: {
    nameChangeFn(state) {
      state.name = "추보경";
    },
    ageChangeFn(state) {
      state.age = 20;
    },
  },
});

export const { nameChangeFn, ageChangeFn } = user.actions;

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
  reducers: {
    countUpdateFn(state, action) {
      const index = state.findIndex((product) => {
        return product.id === action.payload;
      });
      state[index].count++;
    },
    addItemFn(state, action) {
      if (state.find((e) => e.id === action.payload.id))
        return alert("이미 담겨져 있는 상품입니다");
      state.push(action.payload);
    },
  },
});

export const { countUpdateFn, addItemFn } = productList.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    userPhoneNumber: userPhoneNumber.reducer,
    productList: productList.reducer,
  },
});
