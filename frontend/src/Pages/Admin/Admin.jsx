import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Admin = () => {
  const [data, setdata] = useState([]);
  function getAll() {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setdata(res.data);
      console.log(res.data);
    });
  }
  useEffect(() => {
    getAll()
  }, [])

  return (
    <div className='container'>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {
          data.map((elem) => {
            return <tr>
              <td><img src={elem.image} alt="" /></td>
              <td>{elem.name}</td>
              <td>{elem.price}</td>
              <td><button onClick={() => {
              }}>Delete</button></td>
            </tr>
          })
        }
      </tbody>
    </div>
  )
}

export default Admin