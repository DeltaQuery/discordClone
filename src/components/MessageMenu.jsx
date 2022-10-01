import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteMessage } from '../services/deleteMessage'
import { useSelector } from 'react-redux'

export default function MessageMenu({anchorEl, setAnchorEl, open, message }) {
  const activeChannel = useSelector(state => state.data.activeChannel)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const removeMessage = async (e) => {
    await deleteMessage(e, activeChannel, message.id)
  }

  return (
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            background: "#19191d",
            overflow: 'visible',
            color: "#C41E3A",
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: '#19191d',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={(e) => removeMessage(e)}>
          Delete message <ListItemIcon><DeleteIcon style={{ color : "#C41E3A", marginLeft: 10 }}/> </ListItemIcon>
        </MenuItem>
      </Menu>
  )
}
