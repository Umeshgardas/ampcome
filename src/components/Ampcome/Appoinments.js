import React, { useState, useEffect } from 'react'
import "./Appoinments.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const Appoinments = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(result => setData(result))
  }, [])

  return (
    <>
      <div className='parent'>
        <div className='appoinment_upper'>
          <h3>Appoinments</h3>
          <div className='upper'>
            <input type="search" placeholder='List of Booked Appoinments' />
            <button type="button" class="btn btn-outline-primary p-20">Add &nbsp;<AddCircleOutlineIcon /></button>
          </div>

        </div>
        <div className='appoinment_middle'>
          <input type="text" class="form-control" placeholder="Search by name, number" aria-label="Username" />
          {/* <span class="input-group-text">@</span> */}

          <select className="form-select" aria-label="Default select example">
            <option selected>Select Unit Name</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Unit Name</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Unit Name</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Unit Name</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className='appoinment_lower'>
          <table>
            <tr className='head' >
              <th> ID</th>&nbsp;&nbsp;
              <th>NAME</th>&nbsp;&nbsp;
              <th>USERNAME</th>&nbsp;&nbsp;
              <th>EMAIL</th>&nbsp;&nbsp;
              <th>ADDRESS</th>&nbsp;&nbsp;
              <th>PHONE</th>&nbsp;&nbsp;
              <th>WEBSITE</th>&nbsp;&nbsp;
              <th>COMPANY</th>&nbsp;&nbsp;
            </tr>
            {
              data.map((currele) => {
                const { id, name, username, email, address, phone, website,company } = currele;
                return (
                  <tr className="data" key={id}>
                    <td>{id}</td>&nbsp;&nbsp;
                     <td>{name}</td>&nbsp;&nbsp;
                    <td>{username}</td>&nbsp;&nbsp;
                    <td>{email}</td>&nbsp;&nbsp;
                    <td>{address.street}</td>&nbsp;&nbsp;
                  
                    {/* <td>{address}</td>&nbsp;&nbsp; */}
                    <td>{phone}</td>&nbsp;&nbsp;
                    <td>{website}</td>&nbsp;&nbsp; 
                    <td>{company.name}</td>&nbsp;&nbsp; 
                  </tr>
                );
              })
            }
          </table>
        </div>
      </div>
    </>
  )
}

export default Appoinments