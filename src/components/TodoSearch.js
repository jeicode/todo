import React from "react";

function TodoSearch({loading, setSearchValue}) {

    const search = (event) => {
        setSearchValue(event.target.value)
    }

    return (
           
        <form id="form" className="form">
            <input className="form-control"
                onChange={search}
                disabled={loading}
                placeholder="Buscar tarea"
                autoFocus />
        </form>
            

    )
}


export { TodoSearch }