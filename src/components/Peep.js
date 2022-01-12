import React from 'react'
import ClosePeep from './ClosePeep'
import EditPeep from './EditPeep'



const Peep = ({ content, handleClose, id }) => {
  
  return (
    <div className="peep">
      <ClosePeep id={id} handleClose={handleClose} />
      {content}
      <EditPeep />
    </div>
  )
}

export default Peep
