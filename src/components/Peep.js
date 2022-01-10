import React from 'react'

const Peep = ({ content }) => {
  return (
    <div className="peep">
      <img src="https://www.clipartmax.com/png/full/43-434897_thin-close-icon-png.png" className="close"/>
      {content}
    </div>
  )
}

export default Peep
