import { configureStore } from "@reduxjs/toolkit";
// import { userSlice } from "./slices/userSlice";
import { translateSlice } from "./slices/translateSlice";

export default configureStore({
  reducer: {
    // userState: userSlice.reducer,
    translateState: translateSlice.reducer,
  },
});
