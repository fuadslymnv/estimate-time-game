import { createContext, useState } from "react";

import { useContext } from "react";

const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userList, setUserList] = useState([]);

  const updateUserList = (user) => {
    setUserList((users) => ({
      ...users,
      user,
    }));
  };

  return (
    <UserContext.Provider value={{ userList, updateUserList }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const User = () => {
  return useContext(UserContext);
};
