import React from "react";
import {
  Container,
  Icon,
  IconWrapper,
  TextButton
} from './styles';
import DiscordImg from '../../assets/discord.png';
import { RectButtonProperties } from "react-native-gesture-handler";

type Props = RectButtonProperties & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <Container {...rest} >
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>

      <TextButton>
        { title }
      </TextButton>
    </Container>
  )
}

