import React, { useState } from 'react'

const PeepInputForm = () => {
  const [peepContent, setPeepContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const res = fetch('http://localhost:3001/peeps', {
      headers: { 'content-type': 'application/json' },
      method: "POST",
      body: JSON.stringify({ content: peepContent })
    })

    console.log(res)
    
    setPeepContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label>
        What's happening?
        <input type="text" value={peepContent} onChange={e => setPeepContent(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default PeepInputForm
