import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const Navigate = useNavigate()

  const RedirctTable=() =>{
    Navigate('/Table');
  }

  return(
  <>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is the home page content.</p>
  </div>
  <br></br>
  <button onClick={RedirctTable}>Click me</button>
  </>
)
}

export default Home;