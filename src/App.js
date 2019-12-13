import React from 'react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

class App extends React.PureComponent {

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Home></Home>
      </React.Fragment>
    )
  }
}

export default App;
