import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

function UsernameModal() {
    const [show, setShow] = useState(false);
    const [screenName, setScreenName] = useState(localStorage.getItem('screenName') || '');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () =>{
        localStorage.setItem('screenName', screenName);
        setShow(false);
    }

    function handleKeyPress(e){
        //console.log(e.key);
        if(e.key === 'Enter'){
            handleSave();
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Screen Name
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Screen Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder={'John Doe'} value={screenName}  onKeyPress={(e)=>handleKeyPress(e)} onChange={(e)=>setScreenName(e.target.value)}/>
                    </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default UsernameModal;