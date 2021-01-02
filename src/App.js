import React from 'react';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Details from './components/Details';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './components/Cart';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/Products/" component={Products} />
        <Route exact path="/Aboutus" component={Aboutus} />
        <Route component={Error} />
        
      </Switch>
    
    </>
  
  );
}

export default App;
