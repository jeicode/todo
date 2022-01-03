import React from "react"


function EmptyTodos(params) {
    return (
        <div className="alert alert-warning mt-4" role="alert">
            Crea una tarea :)
        </div>
    )
}


function EmptySearch({searchText}) {
    return (
        <div className="alert alert-warning mt-4" role="alert">
            No hay resultados para {searchText}!
        </div>
    )
}

export {EmptyTodos, EmptySearch}