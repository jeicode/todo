import React from "react";


function TodoCounter({totalTasksCompleted, total}){
    return (
        <>
            <h1 className="text-center">What's Up you've complete {totalTasksCompleted} of {total} tasks</h1>
        </>
    )
}


export {TodoCounter}