import React from "react"

export const ErrorMessage = ({children}) => { 
    return (<span className="invalid-feedback">{children}</span>)
}
