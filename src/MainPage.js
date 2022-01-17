import React, { useContext } from 'react'
import PeepsContainer from './components/PeepsContainer'
import PeepInputForm from './components/PeepInputForm';
import { CircularProgress } from '@mui/material';
import { LoadingContext } from './App';

const MainPage = ({onSubmittingPeep, handleDeletePeep, peeps, onSubmittingEdit}) => {
  const {isLoading} = useContext(LoadingContext)
  return (
    <div>
      <PeepInputForm onSubmittingPeep={onSubmittingPeep}/>
      { isLoading ? <div className="circular-progress"><CircularProgress /></div> : 
      <PeepsContainer handleClose={handleDeletePeep} peeps={peeps} onSubmittingEdit={onSubmittingEdit} /> }
    </div>
  )
}

export default MainPage
