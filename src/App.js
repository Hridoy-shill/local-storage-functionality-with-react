import logo from './logo.svg';
import './App.css';
import Cosmatics from './components/Cosmatics/Cosmatics';
import Dress from './components/Drass/Dress';
import ClearCard from './components/ClearCard/ClearCard';

function App() {
  return (
    <div className="App">
       <Cosmatics></Cosmatics>

       <ClearCard></ClearCard>

       <Dress></Dress>
    </div>
  );
}

export default App;
