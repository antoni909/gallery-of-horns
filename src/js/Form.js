import React from 'react';
import Form from 'react-bootstrap/Form';



class FormSelect extends React.Component{
  render(){
    return(

      <Form>
        <Form.Group controlId="someId">
          <Form.Label>
            Select A Beast by Number of Horns!
          </Form.Label>
          <Form.Control as="select" custom />
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>100</option>
        </Form.Group>
      </Form>

    );
  }
}

export default FormSelect;

// onchange func with Form component
// pass in values to option tags
