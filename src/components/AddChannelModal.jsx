import React, { useState } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Alert from "@mui/material/Alert"
import Collapse from "@mui/material/Collapse"
import { addChannel } from "../services/addChannel"
import { getChannels } from "../services/getChannels"

export const AddChannelModal = ({
  openModal,
  setOpenModal,
  setChannelList,
}) => {

  const [channelName, setChannelName] = useState("")
  const [validChannel, setValidChannel] = useState(true)

  const handleClose = () => {
    setOpenModal(false)
  }

  const createChannel = async () => {
    if (
      channelName !== undefined &&
      channelName !== null &&
      channelName.trim() !== ""
    ) {
      await addChannel(channelName)
      const channels = await getChannels()
      setChannelList(channels)
      handleClose()
    } else {
      setValidChannel(false)
      setTimeout(() => {
        setValidChannel(true)
      }, 4000)
    }
  }

  return (
    <Dialog open={openModal} onClose={handleClose} className="addChannelModal">
      <Collapse in={validChannel === false}>
        <Alert
          className="channelAlert"
          severity="error"
          onClose={() => {
            setValidChannel(true);
          }}
        >
          ¡Ingresa un nombre de canal válido!
        </Alert>
      </Collapse>
      <DialogTitle sx={{ color: "lightgray" }}>Crear canal</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "lightgray", fontSize: "14px" }}>
          Crea un nuevo canal para iniciar una nueva conversación o para un
          propósito específico.
        </DialogContentText>
        <input
          autoFocus
          type="text"
          onChange={(val) => setChannelName(val.target.value)}
          value={channelName}
          placeholder="# nuevo-canal"
          className="newChannelInput"
        />
        <div className="addChannelModal--Buttons">
          <Button
            onClick={createChannel}
            variant="contained"
            sx={filledButtonSx}
          >
            Crear
          </Button>
          <Button onClick={handleClose} variant="outlined" sx={outlinedButtonSx} className="submitButton">
            Cancelar
          </Button>
        </div>
      </DialogContent>

    </Dialog>
  )
}

const outlinedButtonSx = {
  color: "#738adb",
  border: "1px solid #738adb",
  width: "108px",
  fontWeight: "600",
  "&:hover": {
    border: "1px solid #738adb",
    background: "#353b44",
  },
}

const filledButtonSx = {
  background: "#738adb",
  width: "110px",
  fontWeight: "600",
  "&:hover": {
    /*background: "#93a4df",*/
    backgroundColor: "black",
    color: "#738adb",
  },
}