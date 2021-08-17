import React, { useState } from "react";

import { UserContext } from "./UserContext";
import { AppRouter } from "./AppRouter";

export const MainApp = () => {

  const [user, setUser] = useState({id: '', name: ''})

  return (
    <UserContext.Provider value = {{
      user,
      setUser
    }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
