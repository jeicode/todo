import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const TodoContext = React.createContext()

function TodoProvider(props){ 

    let searchTasks = []
    const [searchValue, setSearchValue] = React.useState("")
    const [openModal, setOpenModal] = React.useState(false)

    const { item: tasks,
            saveItem: saveTasks,
            loading, 
            error
            } = useLocalStorage("tasks", [])
    const totalTasks = tasks.length
    const totalTasksCompleted = tasks.filter( t =>  t.complete).length
    let cloneTasks = [...tasks]; 
    
    // search
    searchTasks = tasks.filter(t => t.text.toUpperCase()
                                    .includes(searchValue.toUpperCase()))
    
    
    const changeCompleteTask = (index) => {
        cloneTasks = [...tasks]; // clone tasks
        cloneTasks[index].complete  = !tasks[index].complete
        saveTasks("tasks", cloneTasks)
    }
    
    const delTask = (index) => {
        cloneTasks = [...tasks]; // clone tasks
        cloneTasks.splice(index, 1);
        saveTasks("tasks", cloneTasks)
    }

    const addTask = (task) => {
        cloneTasks.push(task)
        saveTasks("tasks", cloneTasks)
    }
    return (
        <TodoContext.Provider value={{
           setSearchValue,
           loading,
           error,
           searchTasks,
           totalTasks,
           totalTasksCompleted,
           changeCompleteTask,
           delTask, 
           openModal,
           setOpenModal,
           addTask
        }}>

        {props.children}
            
        </TodoContext.Provider>
    )
    
          
}

export {TodoContext, TodoProvider};