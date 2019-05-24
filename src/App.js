import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import Cart from './components/Cart'
import Menu from './components/Menu'
import Login from './components/Login'
import Footer from './components/Footer'
class App extends Component {
  render() {
    // change the string to change company name
    const CompanyName = "Chef";

    return (
       <BrowserRouter>
            <div className="App">
              <Navbar CompanyName = {CompanyName}/>
                <Switch>
                    <Route exact path="/" component={Menu}/>
                    <Route exact path="/menu" component = {Menu}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/Blog" component={Blog}/>
                  </Switch>
                  <Footer/>
             </div>
       </BrowserRouter>
    );
  }
}

export default App;
