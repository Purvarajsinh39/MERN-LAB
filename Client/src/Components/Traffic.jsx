import React, { useState } from "react";


const Traffic = () => { 
  const [color, setColor] = useState('red');

  const handleClick = (e) => {
    e.preventDefault();
    
    setColor('red')

    if(color === 'red') {
      setColor('yellow')
    } else if(color === 'yellow') {
      setColor('green')
    } else {
      setColor('red')
    }
  }

  return(
    <div style={{ background: color, padding: '20px', marginTop: '20px',width:'50%' }}>
      <button type="button" onClick={handleClick}>Change Color</button>
    </div>
  )
}
export default Traffic;
