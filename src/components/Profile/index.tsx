import React from 'react';
import { Avatar } from '../Avatar';
import { 
  Container,
  Wrapper,
  User,
  Greeting,
  UserName,
  Message
} from './styles';

export function Profile() {
  return (
    <Container>

      <Avatar urlImage="https://github.com/samuelLimaSantos.png"/>

      <Wrapper>
        <User>
          <Greeting>
            Olá,
          </Greeting>

          <UserName>
            Rodrigo
          </UserName>
        </User>

        <Message>
          Hoje é dia de vitória
        </Message>

      </Wrapper>
    </Container>
  )
}