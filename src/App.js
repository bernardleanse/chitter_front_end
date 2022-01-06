import logo from './logo.svg';
import './App.css';
import PeepInputForm from './components/PeepInputForm';
import PeepsContainer from './components/PeepsContainer';


function App() {
  return (
    <div className="App">
      <PeepInputForm />
      <PeepsContainer />
    </div>
  );
}

export default App;
