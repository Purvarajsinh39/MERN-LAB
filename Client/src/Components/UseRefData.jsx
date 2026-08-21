import React,{useRef} from "react";

const UseRefData = () => {

  const firstname = useRef()
  const lastname = useRef()

  const handleSubmit = () =>{
      if (!firstname.current.value||firstname.current.value==""){
        firstname.current.focus()
      }else if(!lastname.current.value||lastname.current.value==""){
        lastname.current.focus()
      }else{
        alert(firstname.current.value)
        alert(lastname.current.value)
      }
  }

  return(
  <>
    <h1>UseRef</h1>
    <h2>enter your firstname</h2>
    <input type="text" name="firstname" ref={firstname}></input>
    <h2>enter your lastname</h2>
    <input type="text" name="lastname" ref={lastname}></input><br/>
    <button onClick={handleSubmit}>Click me</button>
  </>
)
}
export default UseRefData;