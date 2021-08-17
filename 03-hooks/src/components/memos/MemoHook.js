import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import procesoPesado from '../../helpers/procesoPesado'

import "../useEffect/effect.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h2>
        Counter is: <small>{counter}</small>
      </h2>

      <p>{memoProcesoPesado}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <br />
      <button
        className="btn btn-danger ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
