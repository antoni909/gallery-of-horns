import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component{
  render(){
    console.log(this.props);
    console.log(this.props.openModal);
    let beastArr = this.props.dataSelectBeast.map( (beast,index) => {
      return (
        <div key={index}>
          <HornedBeast
            index={index}
            openModal={this.props.openModal}
            title={beast.title}
            keyword={beast.keyword}
            horns={beast.horns}
            description={beast.description}
            image_url={beast.image_url}
          />;
        </div> );
    });
    return (
      <CardColumns>
        {beastArr}
      </CardColumns>);
  }
}

export default Main;
