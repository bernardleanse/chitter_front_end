import React, { useState } from 'react'

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const passwordsMatch = (password === passwordConfirmation)
    
  }

  return (
    <div className="signup-wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input className='form-field' type='text' onChange={e => setUsername(e.target.value)} />
        </label> 
        <br></br>
        <label>
          Password
          <input className='form-field' type='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
          Confirm Password
          <input className='form-field' type='password' onChange={e => setPasswordConfirmation(e.target.value)} />
        </label>
        <input type='submit' value='Sign Up' />
      </form>
    </div>
  )
}

export default SignUpForm
