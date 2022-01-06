import React, { useEffect, useState } from 'react'

const PeepsContainer = () => {
  const [peeps, setPeeps] = useState([])

  const fetchPeeps = async () => {
    console.log('fetching')
  }

  useEffect(() => {
    peeps = fetchPeeps()
    setPeeps(peeps)
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default PeepsContainer
