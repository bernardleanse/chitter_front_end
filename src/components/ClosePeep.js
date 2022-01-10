import React from 'react'

const ClosePeep = ({ handleClose, id }) => {

  return (
    <img onClick={() => handleClose(id)} src="https://www.clipartmax.com/png/full/43-434897_thin-close-icon-png.png" className="close"/>
  )
}

export default ClosePeep

