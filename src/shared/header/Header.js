import React from 'react'


function Header({children, loading}) {
    // me pasa los componentes hijos a Array, sin importar si viene null, Object:, o [ele, ele2, ele3]
    const arrChildren = React.Children.toArray(children)

    return (
        <header>
            { arrChildren.map( child => React.cloneElement(child, {loading}))}
        </header>
    )
}


export {Header};