import React, { Component } from 'react';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Cards from './Components/Cards';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { StateContext } from './Context/StateContext';

class App extends Component {

  render(){
    return (
      <div>
      <StateContext>
        <Nav/>
        <Banner/>
        <Cards/>
        <Content/>
        <Footer/>
      </StateContext>
      </div>
    );
  }
}

export default App;
