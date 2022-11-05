import React from "react"
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { getAuth } from "firebase/auth"
const auth = getAuth()

export const PublicRoute = ({ children }) => {
    const globalUser = useSelector(state => state.data.globalUser)

    if (globalUser) {
        return <Navigate to="/" />
    }

    return (
        children
    )
}
