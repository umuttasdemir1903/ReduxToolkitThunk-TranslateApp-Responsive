// asenkron işlemler yapıp sonucunu
// aşama aşama slice'a bildiren
// pending / fullfilled / rejected
// asenkron thunk aksiyonu

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//? bizden istediği iki parametre
//* Aksiyonun tipi (string şeklinde)
//* fonksiyon

export const getUser = createAsyncThunk("getUsers", async () => {
  //* veritabanı işlemleri
  const res = await axios("https://jsonplaceholder.typicode.com/users");

  //* akisyonun payload'ını belirleme
  return res.data;
});
