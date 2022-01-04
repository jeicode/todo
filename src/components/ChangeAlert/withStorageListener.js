import React from 'react';


function withStorageListener(WrappedComponent) {

    return (props) => {

      React.useEffect(() => {
        
        const onChange = (change) => {
          if (change.key === "tasks") {
            props.setStorageChange(true);
          }
        };
  
        window.addEventListener("storage", onChange);
  
        return () => {
          window.removeEventListener("storage", onChange);
        };
      }, []);
    
        return (
          <WrappedComponent
            {...props}
          />
        );
    }
  
}

export { withStorageListener };