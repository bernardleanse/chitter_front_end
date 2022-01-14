import React from 'react'
import PeepsContainer from './components/PeepsContainer'
import PeepInputForm from './components/PeepInputForm';

const MainPage = ({onSubmittingPeep, handleDeletePeep, peeps, onSubmittingEdit}) => {
  return (
    <div>
      <PeepInputForm onSubmittingPeep={onSubmittingPeep}/>
      <PeepsContainer handleClose={handleDeletePeep} peeps={peeps} onSubmittingEdit={onSubmittingEdit} />
    </div>
  )
}

export default MainPage
