import React, { useState, useEffect } from "react";

const CharCount= () =>{

  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(value.length);
  }, [value]);


  return(
    <>
    <br></br>
    <br></br>
    <span>Enter the Name :</span>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a name"/>
    <p>Char Count : {count}</p>
    </>
  );

}
export default CharCount;

 