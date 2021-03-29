import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


class SelectedBeast extends React.Component{
  render(){
    return(
      <Modal
        size='lg'
        style={{ width: '100%' }}
        show={this.props.openBeastModal}
        onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.pickedBeast.description}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <Container>
            <Image
              src={this.props.pickedBeast.image_url}
              alt={this.props.pickedBeast.title} fluid />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"
            onClick={this.props.closeModal}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
