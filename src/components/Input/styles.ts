import styled from 'styled-components/native';
import { TextInput as RNTextInput } from 'react-native';

interface InputWrapperProps {
  isFocused?: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const InputWrapper = styled.View<InputWrapperProps>`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  border-width: 1.5px;
  border-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.accent : 'transparent'};
`;

export const IconContainer = styled.View`
  margin-right: 12px;
  justify-content: center;
  align-items: center;
`;

export const StyledTextInput = styled(RNTextInput)`
  flex: 1;
  height: 100%;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.inputText};
`;

export const RightIconTouch = styled.TouchableOpacity`
  padding: 4px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;

