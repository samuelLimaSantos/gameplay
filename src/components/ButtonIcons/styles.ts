import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-color: ${theme.colors.line};
  border-right-width: 1px;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const TextButton = styled.Text`
  flex: 1;
  color: ${theme.colors.heading};
  font-size: 15px;
  text-align: center;
`;