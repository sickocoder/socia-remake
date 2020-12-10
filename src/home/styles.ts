import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { BlurView } from "expo-blur";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled(BlurView)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  
  
  position: absolute;
  top: 0;
  padding: ${Constants.statusBarHeight + 16}px 16px 16px;
  height: ${Constants.statusBarHeight + 88}px;
  z-index: 5;
`;

export const AppTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;