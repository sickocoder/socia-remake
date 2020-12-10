import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import Constants from "expo-constants";

export const BottomNavigation = styled(BlurView)`
  width: 100%;
  padding: 8px 16px ${Constants.statusBarHeight}px;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  position: absolute;
  bottom: 0;
  z-index: 5;
`
export const BottomNavigationItem = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  height: 48px;
`