import React, { useState, useEffect } from "react";
import ChildA from "./ChildA";
import { Provider } from "react-redux";
import { store } from "./store";
const Parent = () => {
  
  // const setmoney=()=>{
  //   setmony(money+10)
  // }

  return(
  <>
    <h1>this is the parent</h1>
    <Provider store={store}>
    <ChildA/>
    </Provider>
  </>
)
}

export default Parent;