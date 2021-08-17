import React, { useContext } from "react";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const lasPath = localStorage.getItem("lastPath") || "/";

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: { name: "izan" },
    });

    history.replace(lasPath);
  };

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
      <br />

      {/* <ReactFlvPlayer
        url="http://localhost:8000/live/STREAM_NAME.flv"
        heigh="800px"
        width="800px"
        isMuted={true}
      /> */}
    </div>
  );
};
