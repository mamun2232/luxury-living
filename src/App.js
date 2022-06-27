import logo from './logo.svg';
import './App.css';
import { Route,  Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navber from './pages/Utilitis/Navber';


  

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
