import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


function useTodos(){ 

    let searchTasks = []
    const [searchValue, setSearchValue] = React.useState("")
    const [openModal, setOpenModal] = React.useState(false)

    const { item: tasks,
            saveItem: saveTasks,
            loading, 
            error,
            sincronize: sincronizeTodos,
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
    return {
           setSearchValue,
           searchValue,
           loading,
           error,
           searchTasks,
           totalTasks,
           totalTasksCompleted,
           changeCompleteTask,
           delTask, 
           openModal,
           setOpenModal,
           addTask,
           sincronizeTodos,
    }    
          
}

export {useTodos};


