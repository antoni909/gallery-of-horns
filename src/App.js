import React from 'react';
import Header from './js/Header.js';
import Select from './js/Form.js';
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

  filterOnChange = (event) => {

    const numOfHorns = parseInt(event.target.value);

    let filteredArray = dataSelectBeast;
    if(numOfHorns){
      filteredArray = dataSelectBeast.filter( element => element.horns === numOfHorns);
    }
    this.renderFilteredBeast(filteredArray);
  }

  renderFilteredBeast = data => {
    this.setState({data});
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

    return(
      <div>
        <Header />
        <Select onChange={this.filterOnChange}/>
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
