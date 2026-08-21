import React, { useState, useEffect } from "react";

const Table = () => {
  const [fromValue, setFromValue] = useState({firstName:'', lastName: ''});
  const [error, setError] = useState({firstName:'', lastName: ''});
  const [formData, setFormData] = useState([]);

  React.useEffect(() => {
    const locaData = JSON.parse(localStorage.getItem('formData'))
    if(locaData){
      setFormData(locaData)
    }
  }, [])

  return(
    <>
  <div>
    <h1>Welcome to the Table Page</h1>
    <br></br>
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
  </div>
</>
)
} 

export default Table;