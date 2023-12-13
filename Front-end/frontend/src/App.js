import React, { useEffect, } from 'react';
import { Routes, Route,  BrowserRouter as Router, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for the presence of the token here
    const authToken = localStorage.getItem('token');

    if (!authToken) {
      // Redirect to the login page if no token is present
      navigate('/Login');
    }
  }, [navigate]);
}
const  App = () => {
  return (
  
    <div>
      <header></header>
      <nav>
        
      </nav>
      <div>

      </div>

      
    </div>
  
  )
}



export default App;
