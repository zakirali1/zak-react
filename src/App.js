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

      <Router>
        <div>
        <Header />
    
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path='/Projects/:id' element={<ProjectDetails />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
        </Router>
    </div>
    
    
    
  );
}

export default App;
