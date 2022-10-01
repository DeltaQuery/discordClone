import React, { useState } from "react"
import NotificationsIcon from '@mui/icons-material/Notifications'
import RoomIcon from '@mui/icons-material/Room'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SearchIcon from '@mui/icons-material/Search'
import SendIcon from '@mui/icons-material/Send'
import HelpIcon from '@mui/icons-material/Help'
import MenuIcon from '@mui/icons-material/Menu'

export const ChatHeader = ({ setOpenSidebar }) => {
  const toggleDrawer = (boolean) => {
    setOpenSidebar(boolean)
  }

  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
          <MenuIcon className="chatHeader__menuIcon chatHeader__Micon" onClick={() => toggleDrawer(true)}/>
      </div>

      <div className="chatHeader__right">
        <NotificationsIcon />
        <RoomIcon className="chatHeader__Dicon"/>
        <PeopleAltIcon className="chatHeader__Dicon"/>

        <div className="chatHeader__search">
          <input placeholder="Buscar" />
          <SearchIcon />
        </div>

        <SendIcon className="chatHeader__Dicon"/>
        <HelpIcon className="chatHeader__Dicon"/>
      </div>
    </div>
  )
}
