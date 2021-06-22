import React from 'react';
import { theme } from '../../global/styles/theme';
import { 
  ContainerGradient,
  AvatarImage
} from './styles';

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {

  const { secondary50, secondary70 } = theme.colors;

  return (
    <ContainerGradient colors={[secondary50, secondary70]}>
      <AvatarImage source={{ uri: urlImage }} />
    </ContainerGradient>
  )
}