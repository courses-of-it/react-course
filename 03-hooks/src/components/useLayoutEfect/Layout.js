import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./index.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
    const [box, setBox] = useState({})

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const p = useRef();

  useLayoutEffect(() => {
      setBox(p.current.getBoundingClientRect())
  }, [quote]);

  return (
    <div>
      <h1>Lyaout efect</h1>
      <hr />
      <blockquote className="blockquote text-rigth">
        <p className="mb-3" ref={p}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(box, null, 3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};
