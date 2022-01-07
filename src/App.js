import logo from './logo.svg';
import './App.css';
import PeepInputForm from './components/PeepInputForm';
import PeepsContainer from './components/PeepsContainer'
import { useState } from 'react';




function App() {

  const [peeps, setPeeps] = useState([])

  const onSubmittingPeep = async (peep) => {
  
    const res = await fetch('http://localhost:3001/peeps', {
        headers: { 'content-type': 'application/json' },
        method: "POST",
        body: JSON.stringify(peep)
      })

    setPeeps([...peeps, peep])
    
  }


  return (
    <div className="App">
      <PeepInputForm onSubmittingPeep={onSubmittingPeep}/>
      <PeepsContainer peeps={peeps}/>
    </div>
  );
}

export default App;
