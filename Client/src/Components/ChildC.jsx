import React, { useState, useEffect, useContext } from "react";
import { useSelector,useDispatch } from "react-redux";
import {setMoney,redmoney} from './slicer'

const ChildC = () => {
    
  const money=useSelector((state)=>state.money.value)

  const dispatch=useDispatch()

  const handleAddMoney=()=>{
    dispatch(setMoney(10))
  }

  const handleredMoney=()=>{
    dispatch(redmoney(10))
  }

  return(
  <>
    <h1>this is the ChildC</h1>
    <h2>{money}</h2>
    <button onClick={handleAddMoney}>Add Money</button><br/>
    <button onClick={handleredMoney}>Reduce Money</button>
  </>
)
}

export default ChildC;