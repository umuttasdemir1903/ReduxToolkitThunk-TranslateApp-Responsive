import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "./../../constants/index";

export const getLanguages = createAsyncThunk("getLanguages", async () => {
  //* api'ye diller için atılan istekler
  const res = await axios.request(options);
  //* slice'a gönderilecek dil verisi
  return res.data.data.languages;
});

//* Çeviri için istek atma

export const translateText = createAsyncThunk("translateText", async (param) => {
  //* Api isteği
  const params = new URLSearchParams();
  params.set("source_language", param.sourceLang.value);
  params.set("target_language", param.targetLang.value);
  params.set("text", param.text);

  const options2 = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "9ecd4f6dafmsh09b03979e4a681ap1039fcjsne3cdf9f6b019",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    data: params,
  };
  const res = await axios.request(options2);
  return res.data.data.translatedText;
  //* Slice'a aktarma
});
