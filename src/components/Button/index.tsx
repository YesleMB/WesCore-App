import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, Title } from './styles';

export interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export const Button: React.FC<CustomButtonProps> = ({
  title,
  loading = false,
  disabled,
  onPress,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Container
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.textWhite} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};

export default Button;

