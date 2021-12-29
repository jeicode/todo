import React from "react";

function TodoItem({task, changeCompleteTask, delTask}){

    let {complete, text} = task

    return (
        <>        
            <div className={`alert alert-warning mt-3 ${complete && 'alert-dark'} justify-content-between align-items-center d-flex`} role="alert">
                <p className={`${complete && 'line-through'}`}>{text}</p>
                <h3 className="m-0">
                    <i className={`fas fa-check-circle ${complete && 'fa-undo-alt'} 
                                  text-success m-1`} 
                       role="button" 
                       onClick={changeCompleteTask}>
                     </i>
                    <i className="fas fa-minus-circle text-danger"  
                       role="button"
                       onClick={delTask}>

                    </i>
                </h3>
            </div>
        </>
       
    )
}


export {TodoItem}