import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ storageChange, setStorageChange, setNotifyChanges}) {

  if (storageChange) {
    return <div className="alert alert-secondary mt-4" role="alert">

        <div className='d-flex align-items-center justify-content-between'>
            there were some changes in your list tasks
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => notifyChanges(setStorageChange, setNotifyChanges)}
                >
                Refresh changes
            </button>
        </div>
  </div>
  } 
  return null
}

const notifyChanges = (setStorageChange, setNotifyChanges) => {
  setStorageChange(false)
  setNotifyChanges(true)
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };