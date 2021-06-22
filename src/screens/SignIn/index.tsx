import React from "react";
import { useNavigation } from '@react-navigation/native';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/ButtonIcons";
import { 
  Container,
  Content,
  Image,
  Title,
  Subtitle
} from './styles';

export function SignIn() {
  const { navigate } = useNavigation();

  function handleSignIn() {
    navigate("Home");
  }

  return (
    <Container>
      <Image source={IllustrationImg} resizeMode="stretch"/>

      <Content>
        <Title>
          Conecte-se {'\n'}
          suas jogatinas {'\n'}
          facilmente  
        </Title> 

        <Subtitle>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Subtitle>


        <ButtonIcon 
          title="Entrar com Discord" 
          onPress={handleSignIn}
        />
      </Content>
    </Container>
  )
}