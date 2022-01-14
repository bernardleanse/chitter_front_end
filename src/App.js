import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import MainPage from './MainPage';

function App() {

  useEffect(() => {
    fetchAllPeeps(setPeeps)
  }, [])

  const [peeps, setPeeps] = useState([])

  const onSubmittingPeep = async (peep) => {
  
    await fetch('http://localhost:3001/peeps', {
        headers: { 'content-type': 'application/json' },
        method: "POST",
        body: JSON.stringify(peep)
      })
    

    fetchAllPeeps(setPeeps)
    
  }

  const onSubmittingEdit = async (newContent) => {
    fetch(`http://localhost:3001/peep`, {
      headers: { 'content-type': 'application/json' },
      method: "PATCH",
      body: JSON.stringify(newContent)
    })
    .then(() => {fetchAllPeeps(setPeeps)})
    
  }

  const fetchAllPeeps = async (callback) => {
    const res = await fetch('http://localhost:3001/peeps')
    const data = await res.json()
    console.log(data)
    callback(data.reverse())
  }

  const requestBackendDelete = async (id) => {
    const res = await fetch(`http://localhost:3001/peep/${id}`, {
      method: "DELETE"
    })
    console.log(res)
  }


  const handleDeletePeep = (id) => {
    console.log('clicked')
    requestBackendDelete(id)
    const newPeeps = peeps.filter((peep) => peep.id !== id)
    setPeeps(newPeeps)
    
  }

  return ( 
    <BrowserRouter>
      <div className="App"> 
        <Routes>     
          <Route path='/main' element={<MainPage onSubmittingPeep={onSubmittingPeep} handleDeletePeep={handleDeletePeep} peeps={peeps} onSubmittingEdit={onSubmittingEdit}/>} />
          <Route path='/profile' element={<Profile />} />         
        </Routes>
      </div>    
    </BrowserRouter>
  );
}

export default App;
