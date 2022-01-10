import React from 'react'
import ClosePeep from './ClosePeep'


const Peep = ({ content, handleClose, id }) => {
  
  return (
    <div className="peep">
      <ClosePeep id={id} handleClose={handleClose} />
      {content}
    </div>
  )
}

export default Peep
