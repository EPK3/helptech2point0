import React, { Component } from 'react';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

class App extends Component {

  render(){
    return (
      <div>
        <Nav/>
        <Banner/>
      </div>
    );
  }
}

export default App;
