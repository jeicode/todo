
// React
import React from 'react';
import { TodoProvider } from '../context';
// css
import './App.css';
// Components
import { AppUI } from '../App/AppUI';


function App(props) {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  )

}



export default App;
