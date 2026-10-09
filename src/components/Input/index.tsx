import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  Container,
  Label,
  InputWrapper,
  IconContainer,
  StyledTextInput,
  RightIconTouch,
} from './styles';

export interface CustomInputProps extends TextInputProps {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

export const Input: React.FC<CustomInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  onRightIconPress,
  onFocus,
  onBlur,
  secureTextEntry,
  placeholder,
  value,
  onChangeText,
  ...rest
}) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputWrapper isFocused={isFocused}>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <StyledTextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.inputPlaceholder}
          secureTextEntry={secureTextEntry}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoCapitalize="none"
          {...rest}
        />
        {rightIcon && (
          <RightIconTouch
            onPress={onRightIconPress}
            activeOpacity={0.7}
            disabled={!onRightIconPress}
          >
            {rightIcon}
          </RightIconTouch>
        )}
      </InputWrapper>
    </Container>
  );
};

export default Input;

