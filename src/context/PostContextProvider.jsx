import React from "react";
import { useContext } from "react";
import { Title } from "./PostContext";
function PostContextProvider({ children }) {
  let title = useContext(Title);
  return <Title.Provider value={title}>{children}</Title.Provider>;
}

export default PostContextProvider;
