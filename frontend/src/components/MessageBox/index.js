import React, { useRef, useEffect } from 'react';
import { Container, ListMessages } from './styled';

export default ({ messages, userId }) => {
  const chat = useRef();
  const messagesRef = useRef();
  const chatScroll = () => chat.current.scrollTop = messagesRef.current?.offsetHeight * messages.length + (Math.pow(messages.length,2));

  useEffect(() => () => chatScroll())

  return (
    <Container ref={chat}>
      {messages.map(message => (
        <ListMessages ref={messagesRef} key={message.id} userId={userId === message.userId}>
          <section className="message">{message.message}</section>
          {userId === message.userId ? '' : <span className="name">{message.name}</span>}
          <span className="date">{message.date}</span>
        </ListMessages>
      ))}
    </Container>
  )
}