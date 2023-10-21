import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/userActions";

const initialState = {
  users: [],
  isLoading: true,
  isError: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  // thunk aksiyonları için extraReducers
  extraReducers: (builder) => {
    //* pending > api isteği atıldığında tetiklenir.
    builder.addCase(getUser.pending, (state) => {
        state.isLoading=true
    });
    //* fulfilled > api'den olumlu cevap gelirse tetklenir.
    builder.addCase(getUser.fulfilled, (state, action) => {
        state.isLoading=false
        state.isError = false
        state.users = action.payload
    });
    //* rejected > api'den hata gelirse tetiklenir.
    builder.addCase(getUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
    });
  },
});
