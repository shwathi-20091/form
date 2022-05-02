import React, { useState } from 'react';
import './App.css';
      
function App() {
  const      [name, setName] = useState('');
      
  function onChangeName(e)  {
    e.preventDefault();
      
    setName(e.target.value);
  };
  const message=()=>{
    alert("submitted successfully");
}
  return (
      <div className='form-container'>
    <div >
    <h3>New User Registration Form</h3>
    </div>
    <form  className='.register-form '>
      <div className='row'>
        
          <label htmlFor='firstName'>First Name</label>
          <input className='form-control' placeholder='First Name' type='text' name='firstName' required/>
          <br></br>
          <label htmlFor='lastName'>Last Name</label>
          <input className='form-control' placeholder='Last Name' type='text' name='lastName'/>
          <br></br>
        <label htmlFor='email'>Email</label>
        <input className='form-control' placeholder='Email' type='email' name='email' required/>
        <br></br>
        <label htmlFor='password'>Password</label>
        <input className='form-control' placeholder='Password' type='password' name='password' required/>
        <br></br>
        <label htmlFor='confirmpassword'>Confirm Password</label>
        <input className='form-control' placeholder='Password' type='password' name='confirmpassword' required/>
      <br></br>
        <button type='submit'
        type="submit"
                  className="btn btn-primary"
                  onClick={() => message()}>Create Account</button>
      </div>
    </form>
  </div>
           
  );
}
export default App;