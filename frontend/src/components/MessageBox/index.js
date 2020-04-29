import React, { useRef, useEffect } from 'react';
import { Container, ListMessages } from './styled';

export default ({ data, mySelf, scrollLength }) => {
  const chat = useRef();
  const messages = useRef();
  const chatScroll = () => chat.current.scrollTop = messages.current?.offsetHeight * scrollLength;

  useEffect(() => () => chatScroll())

  return (
    <Container ref={chat}>
      {data.map((chat, index) => (
        <>
          <ListMessages ref={messages} key={index} mySelf={mySelf === chat.id}>
            {mySelf === chat.id ? '' : <section className="name">{chat.name}</section>}
            <section className="message">{chat.message}</section>
            <section className="date">{chat.date}</section>
          </ListMessages>
        </>
      ))}
    </Container>
  )
}