import React, { useState } from "react";

const Water = () => { 
  const [value, setValue] = useState("");

  let status = "";
  if (value !== "") {
      if (value > 90) {
        status = "full";
      } else if (value < 20) {
        status = "empty"; 
      } else {
        status = "normal";
      }
  }
  

  return (
    <>
      <h3>Water Status</h3>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a value"/>
      <br></br>
      <span>Status: </span> {status && <span>{status}</span>}
  </>
  )
}

export default Water;