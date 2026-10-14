import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Contact, Lock, Eye, EyeOff, Headphones } from 'lucide-react-native';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { useAuth } from '@/context/AuthContext';

import {
  ScreenContainer,
  ScrollContent,
  InnerCardCanvas,
  ContentContainer,
  HeaderSection,
  LogoBox,
  LogoText,
  HeaderTextGroup,
  BrandTitle,
  BrandSubtitle,
  FormCard,
  FormHeader,
  FormTitle,
  FormDescription,
  SupportIconBox,
  SupportTitle,
  SupportDescription,
  CodeInfoBox,
  CodeInfoLabel,
  CodeInfoValue,
  FooterContainer,
  ForgotPasswordTouch,
  ForgotPasswordText,
  BackToLoginTouch,
  BackToLoginText,
} from './styles';

type ScreenMode = 'login' | 'forgot_input' | 'forgot_support';

export default function LoginScreen() {
  const theme = useTheme();
  const { signIn } = useAuth();

  const [mode, setMode] = useState<ScreenMode>('login');
  const [promoterId, setPromoterId] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!promoterId.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o código do promotor e a senha.');
      return;
    }

    const numericId = Number(promoterId);
    if (isNaN(numericId)) {
      Alert.alert('Atenção', 'O código do promotor deve ser um número válido.');
      return;
    }

    try {
      setIsLoading(true);
      await signIn(numericId, password);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    } catch (error: any) {
      const errorMessage =
        error.response?.data || 'Erro ao realizar login. Verifique suas credenciais.';
      Alert.alert('Falha no Login', typeof errorMessage === 'string' ? errorMessage : 'Credenciais inválidas.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinueRecover = () => {
    if (!promoterId.trim()) {
      Alert.alert('Atenção', 'Por favor, informe seu código de promotor.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMode('forgot_support');
    }, 600);
  };

  const handleResetToLogin = () => {
    setMode('login');
    setPassword('');
  };

  return (
    <ScreenContainer>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollContent keyboardShouldPersistTaps="handled">
          <InnerCardCanvas>
            <ContentContainer>
              <HeaderSection>
                <LogoBox>
                  <LogoText>C</LogoText>
                </LogoBox>
                <HeaderTextGroup>
                  <BrandTitle>CorePromoter</BrandTitle>
                  <BrandSubtitle>Acompanhamento do promotor</BrandSubtitle>
                </HeaderTextGroup>
              </HeaderSection>

              <FormCard>
                {mode === 'login' && (
                  <>
                    <Input
                      label="ID"
                      placeholder="Seu codigo de promotor"
                      value={promoterId}
                      onChangeText={setPromoterId}
                      keyboardType="numeric"
                      leftIcon={<Contact size={22} color={theme.colors.accent} />}
                    />

                    <Input
                      label="Senha"
                      placeholder="••••••••"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!isPasswordVisible}
                      leftIcon={<Lock size={22} color={theme.colors.accent} />}
                      rightIcon={
                        isPasswordVisible ? (
                          <EyeOff size={20} color={theme.colors.iconSecondary} />
                        ) : (
                          <Eye size={20} color={theme.colors.iconSecondary} />
                        )
                      }
                      onRightIconPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    />

                    <Button
                      title="Entrar"
                      onPress={handleLogin}
                      loading={isLoading}
                    />
                  </>
                )}

                {mode === 'forgot_input' && (
                  <>
                    <FormHeader>
                      <FormTitle>Esqueci minha senha</FormTitle>
                      <FormDescription>
                        Informe seu código de promotor para continuar.
                      </FormDescription>
                    </FormHeader>

                    <Input
                      label="Código do promotor"
                      placeholder="Seu código de promotor"
                      value={promoterId}
                      onChangeText={setPromoterId}
                      keyboardType="numeric"
                      leftIcon={<Contact size={22} color={theme.colors.accent} />}
                    />

                    <Button
                      title="Continuar"
                      onPress={handleContinueRecover}
                      loading={isLoading}
                    />
                  </>
                )}

                {mode === 'forgot_support' && (
                  <>
                    <FormTitle style={{ marginBottom: 12 }}>
                      Esqueci minha senha
                    </FormTitle>

                    <SupportIconBox>
                      <Headphones size={24} color={theme.colors.accent} />
                    </SupportIconBox>

                    <SupportTitle>
                      Entre em contato com a equipe de suporte
                    </SupportTitle>

                    <SupportDescription>
                      Para recuperar seu acesso, fale com a equipe de suporte e informe
                      seu código de promotor.
                    </SupportDescription>

                    <CodeInfoBox>
                      <CodeInfoLabel>Código do promotor</CodeInfoLabel>
                      <CodeInfoValue>{promoterId || '10482'}</CodeInfoValue>
                    </CodeInfoBox>

                    <Button
                      title="Voltar ao login"
                      onPress={handleResetToLogin}
                    />
                  </>
                )}
              </FormCard>
            </ContentContainer>

            <FooterContainer>
              {mode === 'login' ? (
                <ForgotPasswordTouch
                  onPress={() => setMode('forgot_input')}
                  activeOpacity={0.7}
                >
                  <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
                </ForgotPasswordTouch>
              ) : mode === 'forgot_input' ? (
                <BackToLoginTouch
                  onPress={handleResetToLogin}
                  activeOpacity={0.7}
                >
                  <BackToLoginText>← Voltar para o login</BackToLoginText>
                </BackToLoginTouch>
              ) : null}
            </FooterContainer>
          </InnerCardCanvas>
        </ScrollContent>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}