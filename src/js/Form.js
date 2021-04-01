import React from 'react';
import Form from 'react-bootstrap/Form';



class Select extends React.Component{
  render(){

    return(
      <Form >
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Select a Beast by its Number of Horns</Form.Label>
          <Form.Control
            onChange={this.props.onChange}
            as="select"
            custom
          >
            <option
              placeholder="select here"
            >
            select
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
          </Form.Control>
        </Form.Group>
      </Form>

    );
  }
}

export default Select;

// onchange func with Form component
// pass in values to option tags
