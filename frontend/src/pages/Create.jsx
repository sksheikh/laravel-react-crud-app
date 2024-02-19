import React, { useState } from 'react'

export default function Create() {
  const [inputs, setInputs] =  useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
  }
  return (
    <>
    <div className='py-4'>
      <h3 className='mb-4 text-center'>Create page</h3>
      <div className='row'>
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="name" className="form-label">Name </label>
                <input type="name" className="form-control" id="name" name='name' onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label for="email" className="form-label">Email </label>
                <input type="email" className="form-control" id="email" name='email' onChange={handleChange} />
              </div>

              <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
