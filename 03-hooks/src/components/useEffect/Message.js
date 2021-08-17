import React, { useState, useEffect } from "react";

import "./effect.css";

export const Message = () => {
  const [coors, setCoors] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      const coors = {
        x: e.x,
        y: e.y,
      };
	setCoors(coors)
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h2>eres genial</h2>
      <p>x: {coors.x}</p>
      <p>y: {coors.y}</p>
    </div>
  );
};
