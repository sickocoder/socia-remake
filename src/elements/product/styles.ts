import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 8px;
  padding: 8px;
  height: 300px;
  
  flex-direction: column;
  justify-content: space-between;
  
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
  color: purple;
  margin-bottom: 4px;
`

export const TagInfo = styled.View`
  width: 110px;
  background-color: purple;
  padding: 4px;
  border-radius: 8px;
`

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 8px 0;
`

export const SplitButton = styled.TouchableOpacity`
  background-color: purple;
  padding: 8px;
  border-radius: 8px;
  
  justify-content: center;
  align-items: center;
`