import React, { useState, useContext } from 'react'
import { LoggedInUser } from '../App'

const PeepInputForm = ({ onSubmittingPeep }) => {
  const [content, setContent] = useState('')
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUser)
  const handleSubmit = (e) => {
    e.preventDefault()
    const authorId = loggedInUser.id
    onSubmittingPeep({ content, authorId })
    
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label>
        What's happening?
        <input type="text" value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default PeepInputForm
