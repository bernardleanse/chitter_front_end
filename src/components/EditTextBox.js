import React, { useState } from 'react'

const EditTextBox = ({ onSubmittingEdit }) => {

  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmittingEdit({content})

    setContent('')
  }

  return (
    <form className="edit-text-box" onSubmit={handleSubmit}>
      <input type="text" value={content} placeholder="press enter to submit" onChange={e => setContent(e.target.value)} />
    </form>
  )
}

export default EditTextBox
