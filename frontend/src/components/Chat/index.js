import React, { useEffect, useRef, useState } from 'react';

import io from 'socket.io-client';
import uuid from 'uuid/dist/v4'
import { format } from 'date-fns';

import TextArea from './styled';
import MessageBox from '../MessageBox';

import notification from '../../assets/notification.mp3';

const socket = io('http://localhost:8080');
socket.on('connect', () => console.log('socket connected successfully'));

const userId = uuid();
const Notification = new Audio(notification);

export default () => {
  const message = useRef();

  const getDate = ()  => format(Date.now(), `dd/MM/yyyy 'at' HH:mm`)

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const updateMessages = (data) => setMessages([...messages, data]);

    socket.on('message', updateMessages);

    const notifyUser = messages[messages.length - 1]?.userId !== userId
    if (notifyUser) Notification.play();

    return () => socket.off('message', updateMessages)
  }, [messages])

  const sendMessage = (e) => {
    if (e.key === 'Enter' && e.shiftKey) return;
    if (e.key === 'Enter') {
      let textMessage = message.current.value.replace(/\n+/, '');
      if (!textMessage.trim()) return;
      const data = { 
        userId,
        id: Math.random(), 
        message: textMessage,
        date: getDate(),
        name: 'Anonymous',
      }
      socket.emit('message', data);
      message.current.value = '';
    }
  }

  return (
    <>
      <MessageBox userId={userId} messages={messages}/>
      <TextArea onKeyPress={sendMessage} placeholder="write... (press enter to send a message)" ref={message} />
    </>
  );
}
