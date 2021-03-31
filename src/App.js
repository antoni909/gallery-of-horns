import React from 'react';
import Header from './js/Header.js';
import FormSelect from './js/Form.js';
import SelectedBeast from './js/SelectedBeast';
import Main from './js/Main.js';
import Footer from './js/Footer.js';
import dataSelectBeast from './data.json';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      display: false,
      data: dataSelectBeast,
      pickedBeast: {},
    };
  }

  filterBeast(){
    console.log(this.state.data)
  }

  openModal = (index) => {
    this.setState({pickedBeast: this.state.data[index],display: true, });
  }

  closeModal = () => {
    this.setState({
      display: false,
    });
  }

  render(){
    console.log(this.openModal, this.state.display);
    return(
      <div>
        <Header />
        <FormSelect />
        <Main
          openModal={this.openModal}
          dataSelectBeast={this.state.data}
        />
        <SelectedBeast
          openBeastModal={this.state.display}
          closeModal={this.closeModal}
          pickedBeast={this.state.pickedBeast}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
