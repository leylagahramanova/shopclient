import { configureStore } from "@reduxjs/toolkit";

import orderProductsReducer from "../features/orderProductsSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    orderProducts: orderProductsReducer,
    userManagement: userReducer,
  },
});