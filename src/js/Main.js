import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component{
  render(){

    let beastArr = [];
    data.forEach( (beast,idx) => {beastArr.push(

      <HornedBeast
        key={idx}
        title={beast.title}
        keyword={beast.keyword}
        horns={beast.horns}
        description={beast.description}
        image_url={beast.image_url}
      />

    );
    });
    return <CardColumns>{beastArr}</CardColumns>;
  }
}

export default Main;
