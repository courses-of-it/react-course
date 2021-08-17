import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

import "../useEffect/effect.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(1);

  const increment = useCallback((nim) => {
    setCounter(c => c + nim);
  }, [setCounter]);

  return (
    <div>
      <h1>CallbackHook: <small>{counter}</small></h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
