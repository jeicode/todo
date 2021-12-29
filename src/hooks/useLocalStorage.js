import React from 'react';



function useLocalStorage(nameItem, initValue){

    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initValue)
    
    // React.useEffect,  excute code just before render the App
    React.useEffect( () => {
      setTimeout(() => {
        let localStorageItem = localStorage.getItem(nameItem)
        try {
          // local storage validate
          if (localStorageItem){
            localStorageItem = JSON.parse(localStorageItem)
    
        } else {
          localStorage.setItem(nameItem, JSON.stringify(initValue))
          localStorageItem = []
        }
        setItem(localStorageItem)
        
      } catch (err) {
        console.error(err)
        setError(true)
      }
      setLoading(false)
        
      }, 2000);
    }, [])
  
    // save
    const saveItem = (itemName, newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    
  
    return {
      item,
      saveItem,
      loading,
      error
    }
  }

  export {useLocalStorage}