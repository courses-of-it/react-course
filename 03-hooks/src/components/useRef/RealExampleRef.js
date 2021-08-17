import React, { useState } from "react";
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks'

import "../useEffect/effect.css";

export const RealExampleRef = () => {
    const [show, setShow] = useState(false)

  return (
    <>
      <h1>RealExampleRef</h1>
      <hr/>

      {show && <MultipleCustomHooks/>}

      <button className="btn btn-outline-info mt-5" onClick={ () => setShow(!show)}>Show/Hide</button>
      
      </>
  );
};
