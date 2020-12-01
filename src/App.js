import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Me from './components/pages/Me';
import MyWork from './components/pages/MyWork';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
   <>
   <Router>
     <Navbar />
     <Switch>
       <Route path='/my-portfolio' exact component={Home} />
       <Route path='/me' component={Me} />
       <Route path='/mywork' component={MyWork} />
       <Route path='/contact' component={Contact} />
     </Switch>
   </Router>
     
    </>
  );
}

export default App;
