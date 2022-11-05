import React from "react"
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { getAuth } from "firebase/auth"
const auth = getAuth()

export const AuthRoute = ({ children }) => {
    const globalUser = useSelector(state => state.data.globalUser)

    if (!globalUser) {
        return <Navigate to="/login" />
    }

    return (
        children
    )
}
