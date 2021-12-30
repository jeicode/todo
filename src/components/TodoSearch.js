import React from "react";

import {TodoContext} from "../context"

function TodoSearch({searchValue, setSearchValue}) {

    const search = (event) => {
        setSearchValue(event.target.value)
    }

    return (
           
        <form id="form" className="form">
            <input className="form-control"
                value={searchValue}
                onChange={search}
                placeholder="Buscar tarea"
                autoFocus />
        </form>
            

    )
}


export { TodoSearch }