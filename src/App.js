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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './pages/DashBoard/Payment';
import User from './pages/DashBoard/User';
import ManageOrder from './pages/DashBoard/ManageOrder';
import RequreAdmin from './pages/Authentication/RequreAdmin';
import ManageService from './pages/DashBoard/ManageService';
import Service from './pages/DashBoard/Service';
import Project from './pages/DashBoard/Project';


  

function App() {
  return (
    <div className=" ">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<NomalLogin/>}></Route>
        <Route path='/register' element={<NormalRegister/>}></Route>
        <Route path='/service' element={<RequreAuth><Service></Service></RequreAuth>}></Route>
        <Route path='/project' element={<RequreAuth><Project/></RequreAuth>}></Route>
        <Route path='/dashboard' element={<RequreAuth>
          <Dashborad> </Dashborad>
        </RequreAuth>}>
          <Route index element={<Book/>}></Route>
          <Route path='/dashboard/bookingList' element={<BookingList/>}></Route>
          <Route path='/dashboard/review' element={<Review/>}></Route>
          <Route path='payment/:id' element={<Payment/>}></Route>
          <Route path='user' element={<RequreAdmin>
            <User/>
          </RequreAdmin>}></Route>
          <Route path='manageOrder' element={<RequreAdmin>
            <ManageOrder/>
          </RequreAdmin>}></Route>
          <Route path='manageService' element={<RequreAdmin>
            <ManageService/>
          </RequreAdmin>}></Route>
        </Route>
        <Route path='/myProfile' element={
          <RequreAuth>
            <Profile></Profile>
          </RequreAuth>
        
    
      }></Route>
      </Routes>
      <ToastContainer></ToastContainer>
     
    </div>
  );
}

export default App;
