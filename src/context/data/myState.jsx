import React from "react";
import MyContext from "./myContext";
const MyState = (props) => {
  const state = {
    name: "abu bakar",
    profession: "software engineer",
  };
  return <MyContext.Provider value={state}>{props.children}</MyContext.Provider>;
};

export default MyState;
