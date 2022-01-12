import React, { useEffect, useState } from 'react'
import Peep from './Peep'

const PeepsContainer = ({ peeps, handleClose, onSubmittingEdit }) => {

  useEffect(() => {
  
  }, [])

  return (
    <div className="peeps-container">
      {peeps.map((peep) => (
        <Peep handleClose={handleClose} content={peep.content} key={peep.id} id={peep.id} onSubmittingEdit={onSubmittingEdit} />
      ))}
    </div>
  )
}

export default PeepsContainer
