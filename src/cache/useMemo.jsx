/*
* Cache (önbellek), bilgisayar teknolojilerinde kullanılan bir terim.
* Verileri geçici olarak saklamak için kullanılan mekanizmayı ifade eder.
* Veri alışverişni optimize etmek ve performasını arttırmak için kullanılır.
? -- Memoization --
* useMemo
* useCallback 
*/

import { useMemo, useState } from "react";
import "./App.css";

function Memo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  //* useMemo(): bir değeri hesaplamak ve sonucu önbellek saklamak için kullanılır.
  // saklamak için kullanır
  // her render sırasında hesaplamayı yapmak yerine,
  // eğerki bağımlılık değişmediyse hafızadan sonucunu getirir.

  const newCount = () =>
    useMemo(() => {
      //* Ağır hessaplamalar.
      [...new Array(10000)].forEach((item) => {});
      //* Döndürülen sonuç.
      return count * 2;
    }, [count]);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>{newCount}</p>

      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
    </>
  );
}

export default Memo;
