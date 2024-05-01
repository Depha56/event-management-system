import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/signup';
import Login from './components/Login';
import UserDashboard from './components/userDashboard';
import AdminDashboard from './components/adminDashboard';
import { Home } from './components/home';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import './App.css'; 
import { LandingPage } from './components/landingPage';
import ContactPage from './components/contact';

function App() {
 return (
 <div>
 <Router>
    
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/events' element={<Events/>} />
        <Route path="/eventDetails/:id" element={<EventDetails/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      </Routes>
    
 </Router></div>
 );
}

export default App;
