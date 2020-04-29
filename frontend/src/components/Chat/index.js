import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { format } from 'date-fns';
import styles from './styled';
import MessageBox from '../MessageBox';
import notification from '../../assets/notification.mp3';

const socket = io('http://localhost:8080');
const Notification = new Audio(notification);

socket.on('connect', () => console.log('socket connected successfully'));

const id = Math.random()+Date.now()

export default () => {
  const message = useRef();
  const getDate = ()  => format(Date.now(), 'dd/MM/yyyy HH:mm')
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const updateMessages = (data) => setMessages([...messages, data]);

    socket.on('message', updateMessages);

    if (messages[messages.length - 1]?.id !== id) Notification.play();

    return () => socket.off('message', updateMessages)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages])

  const sendMessage = (e) => {
    if (e.key === 'Enter' && e.shiftKey) return;
    if (e.key === 'Enter') {
      let textMessage = message.current.value.replace(/\n+/, '');
      if (!textMessage.trim()) return;
      const data = { 
        id, 
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
      <MessageBox scrollLength={messages.length} mySelf={id} data={messages}/>
      <textarea onKeyPress={sendMessage} placeholder="...write" style={styles.textArea} ref={message} />
    </>
  );
}
