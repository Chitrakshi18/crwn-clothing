import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import {Switch,Route} from 'react-router-dom';
const HatsPage = () => (
   <div>
    <h1>Hats Page</h1>
  </div> );

 

function App() {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={HomePage}></Route>
        <Route exact path ='/hats' component={HatsPage}></Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
