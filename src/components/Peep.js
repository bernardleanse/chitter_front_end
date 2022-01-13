import React, { useState } from 'react'
import ClosePeep from './ClosePeep'
import EditPeep from './EditPeep'
import EditTextBox from './EditTextBox'

const Peep = ({ content, handleClose, id, onSubmittingEdit }) => {
  
  const [showEditBox, setShowEditBox] = useState(false)

  const toggleEditBox = () => {
    setShowEditBox(!showEditBox)
  }

  return (
    <div className="peep">
      <ClosePeep id={id} handleClose={handleClose} />
      {content}
      <EditPeep toggle={toggleEditBox} />
      {showEditBox && <EditTextBox onSubmittingEdit={onSubmittingEdit} id={id}/>}
    </div>
  )
}

export default Peep
