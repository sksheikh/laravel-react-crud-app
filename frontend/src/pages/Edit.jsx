import React, {useState,useEffect} from 'react'
import http from '../http';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit(props) {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);
  const [inputs, setInputs] =  useState({
    name: '',
    email: '',
  });

  useEffect(()=>{
    fetchUser();
  },[]);

  console.log(inputs)

  const fetchUser = () =>{
    http.get('users/'+ id + '/edit').then((res)=> {
      setInputs({
        name: res.data.name,
        email: res.data.email
      })
    })
  }

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    http.put('/users/'+ id, inputs).then(res => {
      navigate('/');
    })
  }

  return (
    <>
      <div className='py-4'>
        <h3 className='mb-4 text-center'>Edit user</h3>
        <div className='row'>
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name </label>
                  <input type="name" className="form-control" id="name" name='name'
                    value={inputs.name} onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email </label>
                  <input type="email" className="form-control" id="email" name='email'
                     value={inputs.email} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

