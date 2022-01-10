import logo from './logo.svg';
import './App.css';
import PeepInputForm from './components/PeepInputForm';
import PeepsContainer from './components/PeepsContainer'
import { useEffect, useState } from 'react';




function App() {

  useEffect(() => {
    fetchAllPeeps(setPeeps)
  }, [])

  const [peeps, setPeeps] = useState([])

  const onSubmittingPeep = async (peep) => {
  
    const res = await fetch('http://localhost:3001/peeps', {
        headers: { 'content-type': 'application/json' },
        method: "POST",
        body: JSON.stringify(peep)
      })

    setPeeps([peep, ...peeps])
    
  }

  const fetchAllPeeps = async (callback) => {
    const res = await fetch('http://localhost:3001/peeps')
    const data = await res.json()
    console.log(data)
    callback(data.reverse())
  }


  return (
    <div className="App">
      <PeepInputForm onSubmittingPeep={onSubmittingPeep}/>
      <PeepsContainer peeps={peeps}/>
    </div>
  );
}

export default App;
