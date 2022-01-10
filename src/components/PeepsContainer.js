import React, { useEffect, useState } from 'react'
import Peep from './Peep'

const PeepsContainer = ({ peeps, handleClose }) => {

  useEffect(() => {
  
  }, [])

  return (
    <div className="peeps-container">
      {peeps.map((peep) => (
        <Peep handleClose={handleClose} content={peep.content} key={peep.id} id={peep.id} />
      ))}
    </div>
  )
}

export default PeepsContainer
