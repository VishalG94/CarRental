import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal'

import CustomButton from '../../../Common/CustomButton/CustomButton'





function ReservationModal(props) {
    console.log(props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.content.heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4></h4>
                <p>
                    {props.content.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <CustomButton onClick={props.onHide}>Confirm</CustomButton>
            </Modal.Footer>
        </Modal>
    );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
// <>
//   <Button variant="primary" onClick={() => setModalShow(true)}>
//     Launch vertically centered modal
//   </Button>

//   <MyVerticallyCenteredModal
//     show={modalShow}
//     onHide={() => setModalShow(false)}
//   />
// </>
//   );
// }
export default ReservationModal;
