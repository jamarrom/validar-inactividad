import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Admin() {
  const [show, setShow] = useState(false);
  var timeoutID;
  let inactivo = false;

  const handleClose = () => setShow(false);
  const handleShow = () => { setShow(true) };

  setup();

  function setup() {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("DOMMouseScroll", resetTimer, false);
    document.addEventListener("mousewheel", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    document.addEventListener("MSPointerMove", resetTimer, false);

    startTimer();
  }

  function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 8000);
  }

  function resetTimer(e) {
    window.clearTimeout(timeoutID);

    goActive();
  }

  function goInactive() {
    handleShow();
    inactivo = true;

    timeoutID = window.setTimeout(()=> {

      if(inactivo)
        window.location.reload();
    }, 5000);
  }

  function goActive() {
    inactivo = false;
    startTimer();
  }

    return(
      <>
        <div>
            <div className="m-t">
              <h2>Administrador</h2>
            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Su sesión finalizará</Modal.Title>
          </Modal.Header>
        </Modal>
    </>
    )
}

