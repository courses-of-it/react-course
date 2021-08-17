import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const {user} = useContext(UserContext)

  return (
    <>
      <h1>HomeScreen</h1>
      <hr />
      <p className="mt-3">User name: {user.name}</p>
      <p className="mt-3">User id: {user.id}</p>
    </>
  );
};