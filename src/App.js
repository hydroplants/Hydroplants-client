import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;