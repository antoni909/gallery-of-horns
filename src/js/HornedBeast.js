import React from 'react';


class HornedBeast extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      clicks: 0,
    };
    // console.log(this.state.clicks);
  }

  clickFunc = () => {

    console.log(this.state.clicks);

    this.setState({
      clicks: this.state.clicks + 1
    });

  }

  render(){

    return(
      <>
        <h1>
          <em>{this.props.title}</em> is a {this.props.keyword}
        </h1>
        <h2>
          <span>Horns: {this.props.horns}</span>
        </h2>
        <h2>
          <span>Favorated: {this.state.clicks} <b>❤️</b></span>
        </h2>
        <img onClick={this.clickFunc}
          src={this.props.image_url}
          alt={this.props.description}/>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
