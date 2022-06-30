import logo from './logo.svg';
import './App.css';
import { Route,  Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navber from './pages/Utilitis/Navber';
import Profile from './pages/Profile/Profile';
import RequreAuth from './pages/Authentication/RequreAuth';
import Dashborad from './pages/DashBoard/Dashborad';
import Book from './pages/DashBoard/Book';
import BookingList from './pages/DashBoard/BookingList';
import Review from './pages/DashBoard/Review';
import NomalLogin from './pages/Authentication/NomalLogin';
import NormalRegister from './pages/Authentication/NormalRegister';


  

function App() {
  return (
    <div className=" ">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<NomalLogin/>}></Route>
        <Route path='/register' element={<NormalRegister/>}></Route>
        <Route path='/dashboard' element={<Dashborad> </Dashborad>}>
          <Route index element={<Book/>}></Route>
          <Route path='/dashboard/bookingList' element={<BookingList/>}></Route>
          <Route path='/dashboard/review' element={<Review/>}></Route>
        </Route>
        <Route path='/myProfile' element={
          <RequreAuth>
            <Profile></Profile>
          </RequreAuth>
        
    
      }></Route>
      </Routes>
     
    </div>
  );
}

export default App;
