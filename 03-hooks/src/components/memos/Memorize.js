import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";
import "../useEffect/effect.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <hr />

      <h2>
        COunter is: <Small value={counter} />
      </h2>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <br/>
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
