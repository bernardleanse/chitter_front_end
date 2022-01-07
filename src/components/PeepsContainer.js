import React, { useEffect, useState } from 'react'
import Peep from './Peep'

const PeepsContainer = ({ peeps }) => {

  useEffect(() => {
  
  }, [])

  return (
    <div>
      {peeps.map((peep) => (
        <Peep content={peep.content} />
      ))}
    </div>
  )
}

export default PeepsContainer
