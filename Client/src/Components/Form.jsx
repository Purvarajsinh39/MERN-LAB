import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const Navigate = useNavigate()

  const RedirctTable=() =>{
    Navigate('/Table');
  }
  const [fromValue, setFromValue] = useState({firstName:'', lastName: ''});
  const [error, setError] = useState({firstName:'', lastName: ''});
  const [formData, setFormData] = useState([]);

  React.useEffect(() => {
    const locaData = JSON.parse(localStorage.getItem('formData'))
    if(locaData){
      setFormData(locaData)
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    let errorData={}
    let isValid=true

    if(!fromValue.firstName||fromValue.firstName==""){
      isValid=false;
      errorData.firstName="First name is required";
    }

    if(!fromValue.lastName||fromValue.lastName==""){
      isValid=false;
      errorData.lastName="Last name is required";
    }

    setError(errorData);
    if(isValid===false){
      return false;
    }
    const locaData = JSON.parse(localStorage.getItem('formData'))
    let mergeData = []
    if(locaData){
      mergeData = [...locaData, fromValue]
    } else {
      mergeData = [fromValue]
    }
    localStorage.setItem('formData', JSON.stringify(mergeData));
    setFormData(mergeData);
    setFromValue({firstName:'', lastName: ''});
  }


return (
  <>
    <form method="post" onSubmit={handleSubmit}>
      <span>First Name</span><br></br>
      <input type="text" name="firstName" value={fromValue.firstName} onChange={(e) => setFromValue({...fromValue, firstName: e.target.value})} /><br></br>
      {error.firstName && <span style={{ color: 'red' }}>{error.firstName}</span>}<br></br>
      <span>Last Name</span><br></br>
      {error.lastName && <span style={{ color: 'red' }}>{error.lastName}</span>}<br></br>
      <input type="text" name="lastName" value={fromValue.lastName} onChange={(e) => setFromValue({...fromValue, lastName: e.target.value})} /><br></br><br></br>
      <button type="submit" onClick={RedirctTable}>Submit</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((data, index) => (
          <tr key={index}>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)
}

export default Form;