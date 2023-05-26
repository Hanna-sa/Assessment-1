import './App.css';
import Add from './Components/Add';
import Dash from './Components/Dash';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
       <Route path ='/' element={<Dash/>}/>
       <Route path ='/Add' element={<Add/>}/>
      </Routes>
    </div>
  );
}

export default App;
