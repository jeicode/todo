import React from "react";


function ErrorLoad({description}){

    return (
        <div className="alert alert-danger mt-4" role="alert">
            {description}
        </div>
    )
}

export {ErrorLoad}