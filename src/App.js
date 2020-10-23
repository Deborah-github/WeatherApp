import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import WeatherPage from './WeatherPage';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NavBar from './NavBar';

function App() {
  return (
    <div>

      <Router>
      <NavBar/>

      <Route path= '/'  component= {HomePage}exact/>
      <Route path= '/login' component= {LoginPage}/>
      <Route path= '/weather' component={WeatherPage}/>

      </Router>
     
    </div>
  );
}

export default App;
