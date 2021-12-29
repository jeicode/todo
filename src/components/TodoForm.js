import React from "react"

import { TodoContext } from "../context"
import { Task } from "../models/tasks"
import Swal from 'sweetalert2'



function TodoFormCreate() {

    const {addTask, setOpenModal} = React.useContext(TodoContext)
    let valueTask = ''


    const onSubmit = (event) => {
        // preventDefault, not refresh page 
        event.preventDefault()
        const task = new Task(valueTask)
        addTask(task)    
        setOpenModal(false)
        Swal.fire(
             '',
            'Save successfully!',
            'success'
          )
    
    }
    return (
        <form onSubmit={onSubmit}>
            <textarea type="text" 
                      onChange={event => valueTask=event.target.value}
                      className="form-control" 
                      placeholder='Description task'/>

            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-success mt-3">Save changes</button>
                
            </div>
            
        </form>
    )
    
}

export {TodoFormCreate}