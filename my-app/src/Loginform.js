import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loginform.css'

const Loginform = () => {
  return (
    
    <div className=' wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='login'>
        <h2 className='mb-3'>Loginform</h2>
        <form className='needs-validation'>
        <div className='form-group was-validated mb-2'>
          <label htmlFor='email' className='form-label'>Email</label>
          
        <input type='email' className='form-control required'></input>
        <div className='invalid-feedback'>
          Please Enter your Email
        </div>
        </div>
        <div className='form-group was-validated mb-2'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type='password' className='form-control required'></input>
          <div className='invalid-feedback'>
          Please Enter your Email
        </div>
        </div>
        <div className='form-group  form-check was-validated mb-2'>
          <input type='checkbox'className='form-check-input'></input>
          <label htmlFor='check'className='form-check-label'>Remember me</label>
        </div>
        <button type='submit' className='btn btn-success w-100 mt-2'>Sign Up </button>
        </form>
    </div>
    </div>
  
  )
}

export default Loginform