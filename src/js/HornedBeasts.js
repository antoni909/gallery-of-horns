import React from 'react';

class HornedBeasts extends React.Component{
  render(){
    return(
      <>
        <h2> 'h2' - {this.props.title} </h2>
        <img src={this.props.img_url} alt={this.props.description}/>
        <p> 'p' - {this.props.description} </p>
      </>
    );
  }
}

export default HornedBeasts;
