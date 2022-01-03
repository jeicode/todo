import React from "react";


function TodoCounter({totalTasksCompleted, totalTasks, loading}){
    
    return (
        <>
            <h1 className="text-center">What's Up you've complete {totalTasksCompleted} of {totalTasks} tasks</h1>
        </>
    )
}


export {TodoCounter}