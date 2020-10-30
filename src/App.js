import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LoginPageContent from './contents/LoginPageContent';
import NavBar from './NavBar';
import WeatherPageContent from './contents/WeatherPageContent';
import Main  from './contents/Main';
function App() {
  return (
    <div>

      <Router>
      <NavBar/>

      <Route path= '/' component={WeatherPageContent}exact/>
      <Route path= '/login' component= {LoginPageContent}/>
      <Route path= '/Main'  component= {Main}/>

      </Router>
     
    </div>
  );
}

export default App;
