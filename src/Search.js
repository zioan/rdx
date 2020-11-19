import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Search component {counter}</h4>
      <input type="text" />
      <button onClick={() => dispatch({ type: "SIGN_IN" })}>Sign In</button>
    </div>
  );
};

export default Search;
