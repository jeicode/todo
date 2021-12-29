import React from "react";
import {TodoContext} from "../context"

function TodoCounter(){
    return (
        <TodoContext.Consumer>
            {({totalTasksCompleted, total}) => (
                <h1 className="text-center">What's Up you've complete {totalTasksCompleted} of {total} tasks</h1>

            )}
        </TodoContext.Consumer>
    )
}


export {TodoCounter}