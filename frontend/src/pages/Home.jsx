import React, { useEffect, useState } from 'react'
import http from '../http'

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers = () => {
    http.get('/users').then(res => {
      setUsers(res.data)
    })

  }

  // console.log(users);
  return (
    <div className='py-4'>
      <h3 className='mb-4 text-center'>All Users</h3>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
              <tr key={user.id}>
                <td>{ index }</td>
                <td>{ user.name }</td>
                <td>{ user.email }</td>
                <td className='d-flex justify-content-center gap-2'>
                  {/* Edit btn */}
                  <button type='button' className='btn btn-dark'>Edit</button>

                  {/* Delete btn */}
                  <button type='button' className='btn btn-danger'>Delete</button>
                </td>
              </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

