import React, {useMemo, useRef, useState} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {CompanyScreen} from './src/screens/CompanyScreen';
import SignupScreen from './src/screens/SignupScreen';
import {
  CompanyFormState,
  FlowStep,
  SignUpFormState,
  initialCompanyForm,
  initialSignUpForm,
} from './src/types';
import { signupRequest } from './src/services/signup.service';
import { saveCompanyRequest } from './src/services/company.service';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8fb" />
      <SafeAreaView style={styles.safeArea}>
        <MainFlow />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function MainFlow() {
  const [step, setStep] = useState<FlowStep>('signup');
  const [signUpForm, setSignUpForm] = useState<SignUpFormState>(initialSignUpForm);
  const [companyForm, setCompanyForm] = useState<CompanyFormState>(initialCompanyForm);
  const [feedback, setFeedback] = useState('');
  const [token, setToken] = useState('');
  const submittingRef = useRef(false);

  const canCreateAccount = useMemo(() => {
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpForm.email.trim());
    const passwordOk = signUpForm.password.trim().length >= 6;
    const passwordsMatch =
      signUpForm.password.trim().length > 0 && signUpForm.password === signUpForm.confirmPassword;

    return emailIsValid && passwordOk && passwordsMatch;
  }, [signUpForm]);

  const canSaveCompany = useMemo(() => {
    const requiredFields = [
      companyForm.razaoSocial,
      companyForm.nomeFantasia,
      companyForm.cnpj,
      companyForm.emailCorporativo,
      companyForm.telefoneWhatsapp,
      companyForm.cep,
      companyForm.rua,
      companyForm.numero,
      companyForm.bairro,
      companyForm.cidade,
      companyForm.estado,
      companyForm.openingHour,
      companyForm.closingHour,
      companyForm.daysOpen,
    ];

    const hasRequiredValues = requiredFields.every(value => value.trim().length > 0);
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(companyForm.emailCorporativo.trim());
    const cnpjDigits = companyForm.cnpj.replace(/\D/g, '');
    const cepDigits = companyForm.cep.replace(/\D/g, '');
    const phoneDigits = companyForm.telefoneWhatsapp.replace(/\D/g, '');
    const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;
    const openingOk = timePattern.test(companyForm.openingHour.trim());
    const closingOk = timePattern.test(companyForm.closingHour.trim());

    return (
      hasRequiredValues &&
      emailIsValid &&
      cnpjDigits.length === 14 &&
      cepDigits.length === 8 &&
      phoneDigits.length >= 10 &&
      openingOk &&
      closingOk
    );
  }, [companyForm]);

  const updateSignUpField = (field: keyof SignUpFormState, value: string) => {
    setSignUpForm(current => ({...current, [field]: value}));
    setFeedback('');
  };

  const updateCompanyField = (field: keyof CompanyFormState, value: string) => {
    setCompanyForm(current => ({...current, [field]: value}));
    setFeedback('');
  };

  const handleGoogleSignup = () => {
    setFeedback('Integração com Google pode ser conectada aqui.');
  };

  const handleCreateAccount = async () => {
    if (submittingRef.current) return;
    submittingRef.current = true;

    try {
      setFeedback('Criando conta...');

      const result = await signupRequest({
        email: signUpForm.email,
        password: signUpForm.password,
      });

      if (!result.ok) {
        setFeedback(result.data?.message || 'Erro ao criar conta');
        return;
      }

      const newToken = result.data.token || result.data.access_token;

      if (!newToken) {
        setFeedback('Token não retornado pelo servidor');
        return;
      }

      setToken(newToken);
      setFeedback('Conta criada com sucesso!');
      setStep('company');
    } catch (error) {
      setFeedback('Erro de conexão com o servidor');
    } finally {
      submittingRef.current = false;
    }
  };

  const handleClearSignup = () => {
    setSignUpForm(initialSignUpForm);
    setFeedback('Campos limpos.');
  };

  const handleEditSignup = () => {
    setFeedback('Modo de edição da conta ativo.');
  };

  const handleSaveCompany = async () => {
    if (!canSaveCompany) {
      setFeedback('Preencha os campos obrigatórios para salvar a empresa.');
      return;
    }

    if (!token || token.trim().length === 0) {
      setFeedback('Token não encontrado. Faça login novamente.');
      return;
    }

    if (submittingRef.current) return;
    submittingRef.current = true;

    try {
      setFeedback('Salvando empresa...');

      const result = await saveCompanyRequest(companyForm, token);

      if (!result.ok) {
        setFeedback(result.data?.message || 'Erro ao salvar empresa');
        return;
      }

      setFeedback('Empresa salva com sucesso!');
    } catch (error) {
      setFeedback('Erro de conexão com o servidor');
    } finally {
      submittingRef.current = false;
    }
  };

  const handleClearCompany = () => {
    setCompanyForm(initialCompanyForm);
    setFeedback('Formulário da empresa limpo.');
  };

  const handleDeleteCompany = () => {
    setCompanyForm(initialCompanyForm);
    setFeedback('Cadastro da empresa removido do formulário.');
  };

  const handleBackToSignup = () => {
    setStep('signup');
    setFeedback('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        {step === 'signup' ? (
          <SignupScreen
            form={signUpForm}
            canCreateAccount={canCreateAccount}
            feedback={feedback}
            onGoogleSignup={handleGoogleSignup}
            onCreateAccount={handleCreateAccount}
            onClear={handleClearSignup}
            onEdit={handleEditSignup}
            onChangeField={updateSignUpField}
          />
        ) : (
          <CompanyScreen
            form={companyForm}
            canSave={canSaveCompany}
            feedback={feedback}
            onBack={handleBackToSignup}
            onClear={handleClearCompany}
            onDelete={handleDeleteCompany}
            onEdit={() => setFeedback('Modo de edição da empresa ativo.')}
            onSave={handleSaveCompany}
            onChangeField={updateCompanyField}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8fb',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

