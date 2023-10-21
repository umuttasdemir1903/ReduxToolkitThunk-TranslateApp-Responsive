import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { useEffect, useMemo, useState } from "react";
import { getLanguages, translateText } from "./redux/actions/translateAction";
import Select from "react-select";
import { clearAnswer } from "./redux/slices/translateSlice";

const App = () => {
  const dispacth = useDispatch();
  const state = useSelector((store) => store.translateState);
  const [text, setText] = useState("");
  const [sourceLang, setSourceLang] = useState({
    value: "en",
    label: "English",
  });
  const [targetLang, setTargetLang] = useState({
    value: "nl",
    label: "Dutch",
  });

  //* Dizideki kod ve name değerlerine sahip olan
  //* objelerin keylerini value ve label'a çevirdik.
  const refinedData = useMemo(() => {
    return state.languages.map((i) => ({
      value: i.code,
      label: i.name,
    }));
  }, [state.languages]);

  useEffect(() => {
    dispacth(getLanguages());
  }, []);

  const handleSwap = () => {
    //* Dilleri değiştirme
    setTargetLang(sourceLang);
    setSourceLang(targetLang);
    //* yazıları temizleme
    setText("");
    dispacth(clearAnswer());
  };

  console.log(sourceLang, targetLang);
  return (
    <div id="main-page">
      <div className="container">
        <h2>Translate + </h2>
        {/* Üst kısım  */}
        <div className="upper">
          <Select
            isLoading={state.isLoading}
            value={sourceLang}
            onChange={setSourceLang}
            className="select"
            options={refinedData}
          />
          <button onClick={handleSwap}>Change</button>
          <Select
            isLoading={state.isLoading}
            value={targetLang}
            onChange={setTargetLang}
            className="select"
            options={refinedData}
          />
        </div>
        {/* orta kısım */}
        <div className="center">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the text you want to translate... "
          ></textarea>
          <textarea
            className={state.isTextLoading ? "loading" : ""}
            value={state.answer}
            disabled
          ></textarea>
        </div>
        {/* alt kısım */}
        <button
          onClick={() =>
            dispacth(translateText({ sourceLang, targetLang, text }))
          }
          id="translate-btn"
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default App;
