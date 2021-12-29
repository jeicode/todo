import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../../context';
import './Modal.css';

function Modal({ children, title }) {

  const {setOpenModal} = React.useContext(TodoContext)
  // ReactDOM.createPortal, pass data another component HTML, in this case "#modal"
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className='card'>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="text-dark" id="exampleModalLongTitle"> {title} </h5>
            <button type="button" onClick={ () => setOpenModal(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">  
            {/* content */}
            {children}
          </div>
        </div>
        

      </div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };