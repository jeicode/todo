import React from 'react';


function withStorageListener(WrappedComponent) {

    return ({setNotifyChanges}) => {

        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {

            if (change.key === "tasks"){
              setStorageChange(true)
            } 
        
          }) 
    
        return (
          <WrappedComponent
            storageChange={storageChange}
            setStorageChange={setStorageChange}
            setNotifyChanges={setNotifyChanges}
          />
        );
    }
  
}

export { withStorageListener };