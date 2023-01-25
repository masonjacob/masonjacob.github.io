import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';


const CustomModal = ({val}) => {

const [show, setShow] = useState(true);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  
const renderModal = (project, index) => {
    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}

return (
    <>
        {renderModal(val)}
    </>

)
};

export default CustomModal;