import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ storageChange, setStorageChange, sincronizeTodos}) {

  if (storageChange) {
    return (
      <div className="alert alert-secondary mb-2 card">

        <div className='d-flex align-items-center justify-content-between'>
            there were some changes in your list tasks
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => sincronizeItems(setStorageChange, sincronizeTodos)}
                >
                Refresh changes
            </button>
        </div>
      </div>
    )
  } 
  return null
}

const sincronizeItems = (setStorageChange, sincronizeTodos) => {
  setStorageChange(false)
  sincronizeTodos()
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };