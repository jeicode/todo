import React from "react";

function CreateButtom({setOpenModal}){

    const createTask = () => {
        setOpenModal(true)
    }
    return (

        <button className="btn btn-primary w-100 mt-2" 
                data-toggle="modal" 
                data-target="#createModal"
                type="buttom" 
                onClick={() => createTask()}
                id="sub_tareas">Crear tarea
        </button>
        )
}

export {CreateButtom}