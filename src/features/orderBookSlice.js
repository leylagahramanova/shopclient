import { createSlice } from "@reduxjs/toolkit";

export const orderProductsSlice = createSlice({
  name: "orderProducts",
  initialState: {
    orderProducts: [],
    totalMoney: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      let exist = false;
      if (state.orderProducts.length === 0) {
        state.orderProducts.push(action.payload);
      } else {
        for (let orderProduct of state.orderProduct) {
          if (orderProduct.id === action.payload.id) {
            exist = true;
          }
        }
        if (exist === false) {
          state.orderProducts.push(action.payload);
        }
      }
    },
    removeProductFromCart: (state, action) => {
      state.orderProducts = state.orderProducts.filter(
        (orderProduct) => orderProduct.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      for (let orderProduct of state.orderProducts) {
        if (orderProduct.id === action.payload.id) {
          orderProduct.orderQuantity += 1;
        }
      }
    },
    decreaseQuantity: (state, action) => {
      for (let orderProduct of state.orderProducts) {
        if (orderProduct.id === action.payload.id) {
          orderProduct.orderQuantity -= 1;
        }
      }
    },
    changeQuantity: (state, action) => {
      for (let orderProduct of state.orderProducts) {
        if (orderProduct.id === action.payload.id) {
          orderProduct.orderQuantity = parseInt(action.payload.orderQuantity);
        }
      }
    },
    calcTotalMoney: (state) => {
      let total = 0;
      for (let orderProduct of state.orderProducts) {
        total =
          total +
          parseInt(orderProduct.orderQuantity) * parseFloat(orderProduct.price);
      }
      state.totalMoney = total;
    },
    cleanCart: (state) => {
      state.orderProducts = [];
      state.totalMoney = 0;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
  calcTotalMoney,
  cleanCart,
} = orderProductsSlice.actions;

export default orderProductsSlice.reducer;