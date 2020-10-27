import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css'


const App = () => {
  const [click, setClick] = useState(true);

  const hideNav = () => {
    setClick(true);
  };

  return (
    <>
      <Router basename="/">
        <Navbar
          handleClick={() => setClick(!click)}
          click={click}
          hideNav={hideNav} 
          />

        <Switch>
          <Route path="/" exact render={(props) => (<Home {...props} hideNav={hideNav} />)} />
          <Route path="/about" render={(props) => (<About {...props} hideNav={hideNav} />)} />
          <Route path="/services" render={(props) => (<Services {...props} hideNav={hideNav} />)} />
          <Route path="/team" render={(props) => (<Team {...props} hideNav={hideNav} />)} />
        </Switch>
        <Footer  hideNav={hideNav}  />
      </Router>
    </>
  );
};

export default App;
