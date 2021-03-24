import React from 'react';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = { votes: 0, }
  }
  render(){
    return(
      <>
        <h1> <em>'h1 title:' - {this.props.title}</em> </h1>
        <h2> 'h2 keyword + horns:' -  {this.props.keyword} <span>{this.props.horns}</span> </h2>
        <p> 'p description:' - {this.props.description} </p>
        <img src={this.props.image_url} alt={this.props.description}/>
        <button> Give Me Luv? </button>
      </>
    );
  }
}

export default HornedBeast;
