import React, { Component } from 'react';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Cards from './Components/Cards';

class App extends Component {

  render(){
    return (
      <div>
        <Nav/>
        <Banner/>
        <Cards/>
      </div>
    );
  }
}

export default App;