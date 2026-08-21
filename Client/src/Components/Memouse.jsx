import React,{useMemo,useState} from "react";

const Memouse = () => {

  const [number,setNumber] = useState(1)
  const [count,setCount] = useState(0)
  
  const calculation = () =>{
    console.log('calculation....')

    let cal = 0

    for(let i=0;i<1000;i++){
      cal = number * number
    }
    return cal
  }

  const square = useMemo(()=>{
      return calculation()
    },[number])

  return(
  <>
    <h1>UseMemo</h1>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
    <h1>Square: {square}</h1>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Click me</button>
  </>
)
}
export default Memouse;