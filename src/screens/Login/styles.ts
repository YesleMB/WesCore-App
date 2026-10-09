import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundCanvas};
`;

export const ScrollContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
})`
  flex: 1;
`;

export const InnerCardCanvas = styled.View`
  width: 100%;
  max-width: 440px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 28px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const ContentContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const HeaderSection = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 32px;
  padding-horizontal: 8px;
`;

export const LogoBox = styled.View`
  width: 52px;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;

export const LogoText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 800;
`;

export const HeaderTextGroup = styled.View`
  flex: 1;
`;

export const BrandTitle = styled.Text`
  font-size: 22px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BrandSubtitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 2px;
`;

export const FormCard = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0px 8px 24px rgba(42, 0, 78, 0.05);
  elevation: 3;
`;

export const FormHeader = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const FormTitle = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 6px;
`;

export const FormDescription = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 20px;
`;

export const SupportIconBox = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const SupportTitle = styled.Text`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
  line-height: 24px;
`;

export const SupportDescription = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 20px;
  margin-bottom: 20px;
`;

export const CodeInfoBox = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 14px 16px;
  margin-bottom: 20px;
`;

export const CodeInfoLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 4px;
`;

export const CodeInfoValue = styled.Text`
  font-size: 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const FooterContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const ForgotPasswordTouch = styled.TouchableOpacity`
  padding: 8px 16px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const BackToLoginTouch = styled.TouchableOpacity`
  padding: 8px 16px;
`;

export const BackToLoginText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;
