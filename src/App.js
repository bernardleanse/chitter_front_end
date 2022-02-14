import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import SignUpForm from './components/SignUpForm';
export const LoadingContext = createContext()
export const LoggedInUser = createContext()

function App() {
  const dummyUser = {id: 1, username: 'bernardleanse', password: 123}

  useEffect(() => {
    fetchAllPeeps(setPeeps)
    setLoggedInUser(dummyUser)
  }, [])

  const [peeps, setPeeps] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState({})
  
  const onSubmittingPeep = async (peep) => {
    setIsLoading(true)
    await fetch('http://localhost:3001/peeps', {
        headers: { 'content-type': 'application/json' },
        method: "POST",
        body: JSON.stringify(peep)
      })
    setIsLoading(false)
    fetchAllPeeps(setPeeps)
  }

  const onSubmittingEdit = async (newContent) => {
    setIsLoading(true)
    fetch(`http://localhost:3001/peep`, {
      headers: { 'content-type': 'application/json' },
      method: "PATCH",
      body: JSON.stringify(newContent)
    })
    .then(()=> {setIsLoading(false)})
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

  const sendSignUpDetailsToBackend = (details) => {
    setIsLoading(true)
    fetch('http://localhost:3001/signup', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(details)
    })
    .then((res) => {
      console.log(`server has responded with status ${res.status}`)
      setIsLoading(false)
    })
    
    
  }

  return ( 
    <BrowserRouter>
      <div className="App"> 
        <LoggedInUser.Provider value={{loggedInUser, setLoggedInUser}}>
        <LoadingContext.Provider value={{isLoading, setIsLoading}}>
          <NavBar />
            <Routes>  
              <Route path="/signup" element={<SignUpForm sendSignUpDetailsToBackend={sendSignUpDetailsToBackend}/>} />          
              <Route path='/main' element={<MainPage onSubmittingPeep={onSubmittingPeep} handleDeletePeep={handleDeletePeep} peeps={peeps} onSubmittingEdit={onSubmittingEdit}/>} />
              <Route path='/profile' element={<Profile />} />                
            </Routes>
        </LoadingContext.Provider> 
        </LoggedInUser.Provider>
      </div>    
    </BrowserRouter>
  );
}

export default App;
