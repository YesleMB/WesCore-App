import styled from 'styled-components/native';

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 52px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.textMuted : theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 16px;
  font-weight: 700;
`;

