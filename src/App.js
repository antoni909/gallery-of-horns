import React from 'react';
import Header from './js/Header.js';
import Main from './js/Main.js';
import Footer from './js/Footer.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
