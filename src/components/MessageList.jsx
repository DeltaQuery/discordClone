import React from 'react'
import { Message } from './Message'
import { useSelector } from 'react-redux'

export const MessageList = () => {
  const messageList = useSelector(state => state.data.messageList)

  return (
    <>
    {messageList && messageList.map((message, index) => {
        return <Message firebaseMessage={message} key={index} />
      })}
    </>
  )
}
