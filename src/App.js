import React from 'react'
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Projects from './Projects2';
import ProjectDetails from './ProjectDetailsPage';
import Contacts from './Contacts'


  


function App() {
  return (
  
    <div>

      
        <div>
        <Header />
    
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path='/Projects/:id' element={<ProjectDetails />} />
          <Route path='/Contacts' element={<Contacts />} />
          
          
        </Routes>
        
    </div>
    
    
    
  );
}

export default App;
