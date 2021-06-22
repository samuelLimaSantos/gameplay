import React, { ReactNode } from 'react';
import { theme } from '../../global/styles/theme';

import { ContainerLinearGradient } from './styles';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {

  const { secondary80, secondary100 } = theme.colors;

  return (
    <ContainerLinearGradient
      colors={[secondary80, secondary100]}
    >
      {children}
    </ContainerLinearGradient>
  )
}