import React, { Component } from 'react';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Cards from './Components/Cards';
import Content from './Components/Content';
import Footer from './Components/Footer';

class App extends Component {

  render(){
    return (
      <div>
        <Nav/>
        <Banner/>
        <Cards/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
