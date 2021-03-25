import React from 'react';
import Card from 'react-bootstrap/Card';

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
      <Card style={{ width: '100%' }}>
        <Card.Img
          variant="top"
          onClick={this.clickFunc}
          src={this.props.image_url}
          alt={this.props.description}
        />
        <Card.Body>
          <Card.Title>
            {this.props.title}
            {this.props.keyword}
          </Card.Title>
          <Card.Text>
            Horns:{this.props.horns}
          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>
            Favorated: {this.state.clicks} <b>❤️</b>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
