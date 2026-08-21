import React, { useState, useEffect } from "react";

const ShoppingCard = () =>{

const [value, setValue] = useState(0);
const [Price, setprice] = useState(0);


useEffect(() => {

    setprice(value*10);
  }, [value]);

return(
  <>
    <br></br>
    <br></br>
    <span>Car Toy:</span>
    <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter a qty"/>
    <p>Price : {Price}</p> 
    </>
)
}

export default ShoppingCard