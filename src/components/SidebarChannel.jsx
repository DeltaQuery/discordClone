import React from "react"
import { useSelector } from 'react-redux'

export const SidebarChannel = ({ name }) => {
  const activeChannel = useSelector(state => state.data.activeChannel)

  return (
    <div className={`sidebarChannel`}>
      <h4 className={`${activeChannel === name ? "sidebarChannel__active" : ""}`}>
        <span 
        className={`sidebarChannel__hash`}
        >#</span>
        {name}
      </h4>
    </div>
  )
}
