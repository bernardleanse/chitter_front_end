import React, { useState } from 'react'
import { LoadingContext } from '../App'


const PeepInputForm = ({ onSubmittingPeep }) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmittingPeep({ content })
    
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
