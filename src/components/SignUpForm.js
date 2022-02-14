import { CircularProgress } from '@mui/material'
import React, { useContext, useState } from 'react'
import { LoadingContext } from '../App'


const SignUpForm = ({sendSignUpDetailsToBackend}) => {
  const {isLoading} = useContext(LoadingContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const passwordsMatch = (password === passwordConfirmation)
    if(passwordsMatch) {
      sendSignUpDetailsToBackend({username, password})
    }
  }

  return (
    <div className="signup-wrapper">
      {isLoading ? <div className="circular-progress"><CircularProgress /></div> :
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
      </form> }
    </div>
  )
}

export default SignUpForm
