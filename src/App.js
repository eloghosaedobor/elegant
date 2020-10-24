import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Navbar from './Navbar';
import Footer from './Footer';


const App = () => {
  const [click, setClick] = useState(true);

  const hideNav = () => {
    setClick(true);
  };

  return (
    <>
      <Router>
        <Navbar
          handleClick={() => setClick(!click)}
          click={click}
          hideNav={hideNav} 
          />

        <Switch>
          <Route path="/" exact render={(props) => (<Home {...props} hideNav={hideNav} />)} />
          <Route path="/elegant" exact render={(props) => (<Home {...props} hideNav={hideNav} />)} />
          <Route path="/elegant/about" render={(props) => (<About {...props} hideNav={hideNav} />)} />
          <Route path="/elegant/services" render={(props) => (<Services {...props} hideNav={hideNav} />)} />
          <Route path="/elegant/team" render={(props) => (<Team {...props} hideNav={hideNav} />)} />
        </Switch>
        <Footer  hideNav={hideNav}  />
      </Router>
    </>
  );
};

export default App;
