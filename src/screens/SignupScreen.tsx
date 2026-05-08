import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import FormField from '../components/FormField';
import GoogleButton from '../components/GoogleButton';
import {PasswordField} from '../components/PasswordField';
import {SignUpFormState} from '../types';

type Props = {
  form: SignUpFormState;
  canCreateAccount: boolean;
  feedback: string;
  onGoogleSignup: () => void;
  onCreateAccount: () => void;
  onClear: () => void;
  onEdit: () => void;
  onChangeField: (field: keyof SignUpFormState, value: string) => void;
};

export default function SignupScreen({
  form,
  canCreateAccount,
  feedback,
  onGoogleSignup,
  onCreateAccount,
  onClear,
  onEdit,
  onChangeField,
}: Props) {
  return (
	<View style={styles.page}>
	  <View style={styles.backgroundBase} />
	  <View style={styles.topDecorLeft} />
	  <View style={styles.topDecorRight} />
	  <View style={styles.topDecorCenter} />
	  <View style={styles.bottomGlow} />

	  <View style={styles.content}>
		<View style={styles.header}>
		  <View style={styles.brandRow}>
			<View style={styles.logoMark}>
			  <View style={[styles.dot, styles.dotBlue]} />
			  <View style={[styles.dot, styles.dotPink]} />
			  <View style={[styles.dot, styles.dotYellow]} />
			  <View style={[styles.dot, styles.dotGreen]} />
			  <View style={styles.crossBar} />
			  <View style={styles.crossBarVertical} />
			</View>
			<Text style={styles.brand}>AUTONOMOUS</Text>
		  </View>

		  <Text style={styles.title}>Crie sua Conta Profissional</Text>
		  <Text style={styles.subtitle}>Comece sua jornada autônoma hoje mesmo.</Text>
		</View>

		<View style={styles.card}>
		  <GoogleButton onPress={onGoogleSignup} />

		  <View style={styles.dividerRow}>
			<View style={styles.dividerLine} />
			<Text style={styles.dividerText}>OU</Text>
			<View style={styles.dividerLine} />
		  </View>

		  <FormField
			label="E-mail"
			placeholder="Digite seu e-mail"
			value={form.email}
			onChangeText={value => onChangeField('email', value)}
			keyboardType="email-address"
			autoCapitalize="none"
			autoComplete="email"
		  />

		  <PasswordField
			label="Senha"
			placeholder="Digite sua senha"
			value={form.password}
			onChangeText={value => onChangeField('password', value)}
		  />

		  <PasswordField
			label="Confirmar Senha"
			placeholder="Confirme sua senha"
			value={form.confirmPassword}
			onChangeText={value => onChangeField('confirmPassword', value)}
		  />

		  <Pressable
			style={[styles.primaryButton, !canCreateAccount && styles.disabled]}
			onPress={onCreateAccount}
			disabled={!canCreateAccount}>
			<Text style={styles.primaryButtonText}>CRIAR CONTA</Text>
		  </Pressable>

		  <View style={styles.secondaryActions}>
			<Pressable style={styles.linkButton} onPress={onClear}>
			  <Text style={styles.linkText}>LIMPAR</Text>
			</Pressable>
			<Pressable style={styles.linkButton} onPress={onEdit}>
			  <Text style={styles.linkText}>EDITAR</Text>
			</Pressable>
		  </View>

		  <Text style={[styles.feedback, feedback ? styles.feedbackVisible : null]}>
			{feedback || 'Preencha os dados para continuar.'}
		  </Text>
		</View>

		<Text style={styles.footer}>
		  Já tem uma conta? <Text style={styles.footerLink}>Entre</Text>
		</Text>
	  </View>
	</View>
  );
}

const styles = StyleSheet.create({
  page: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	paddingHorizontal: 20,
	paddingVertical: 28,
	backgroundColor: '#f8f8fb',
	overflow: 'hidden',
  },
  backgroundBase: {
	...StyleSheet.absoluteFillObject,
	backgroundColor: '#fbfbfe',
  },
  topDecorLeft: {
	position: 'absolute',
	left: 0,
	top: 0,
	width: 260,
	height: 260,
	borderBottomRightRadius: 260,
	backgroundColor: 'rgba(182, 223, 242, 0.42)',
  },
  topDecorRight: {
	position: 'absolute',
	right: 0,
	bottom: 0,
	width: 300,
	height: 300,
	borderTopLeftRadius: 300,
	backgroundColor: 'rgba(246, 210, 226, 0.42)',
  },
  topDecorCenter: {
	position: 'absolute',
	top: '34%',
	left: '22%',
	width: 260,
	height: 260,
	borderRadius: 260,
	backgroundColor: 'rgba(248, 205, 84, 0.12)',
  },
  bottomGlow: {
	position: 'absolute',
	bottom: '12%',
	left: '14%',
	width: 220,
	height: 220,
	borderRadius: 220,
	backgroundColor: 'rgba(78, 193, 185, 0.08)',
  },
  content: {
	width: '100%',
	alignItems: 'center',
	justifyContent: 'center',
	gap: 24,
  },
  header: {
	alignItems: 'center',
	marginBottom: 0,
	maxWidth: 720,
  },
  brandRow: {
	flexDirection: 'row',
	alignItems: 'center',
	gap: 14,
	marginBottom: 18,
  },
  logoMark: {
	width: 40,
	height: 40,
	position: 'relative',
	alignItems: 'center',
	justifyContent: 'center',
  },
  dot: {
	position: 'absolute',
	width: 12,
	height: 12,
	borderRadius: 6,
  },
  dotBlue: {
	top: 0,
	left: 4,
	backgroundColor: '#6cc0e6',
  },
  dotPink: {
	right: 0,
	top: 8,
	width: 14,
	height: 14,
	borderRadius: 7,
	backgroundColor: '#f48ab1',
  },
  dotYellow: {
	left: 0,
	bottom: 4,
	width: 14,
	height: 14,
	borderRadius: 7,
	backgroundColor: '#f8cd54',
  },
  dotGreen: {
	right: 4,
	bottom: 0,
	backgroundColor: '#4ec1b9',
  },
  crossBar: {
	position: 'absolute',
	width: 20,
	height: 3,
	borderRadius: 2,
	backgroundColor: '#4b5563',
  },
  crossBarVertical: {
	position: 'absolute',
	width: 3,
	height: 20,
	borderRadius: 2,
	backgroundColor: '#4b5563',
  },
  brand: {
	fontSize: 18,
	fontWeight: '800',
	letterSpacing: 1.2,
	color: '#444',
  },
  title: {
	fontSize: 34,
	fontWeight: '800',
	color: '#3f3f46',
	textAlign: 'center',
	marginBottom: 10,
  },
  subtitle: {
	fontSize: 18,
	color: '#64748b',
	textAlign: 'center',
  },
  card: {
	width: '100%',
	maxWidth: 620,
	backgroundColor: '#ffffff',
	borderRadius: 20,
	borderWidth: 1,
	borderColor: '#e5eaf2',
	paddingHorizontal: 30,
	paddingVertical: 30,
	shadowColor: '#0f172a',
	shadowOpacity: 0.09,
	shadowRadius: 22,
	shadowOffset: {width: 0, height: 10},
	elevation: 4,
	gap: 20,
  },
  dividerRow: {
	flexDirection: 'row',
	alignItems: 'center',
	gap: 16,
  },
  dividerLine: {
	flex: 1,
	height: 1,
	backgroundColor: '#dbe3ef',
  },
  dividerText: {
	fontSize: 16,
	fontWeight: '700',
	color: '#94a3b8',
  },
  primaryButton: {
	minHeight: 62,
	borderRadius: 13,
	backgroundColor: '#f48ab1',
	alignItems: 'center',
	justifyContent: 'center',
	shadowColor: '#f48ab1',
	shadowOpacity: 0.25,
	shadowRadius: 10,
	shadowOffset: {width: 0, height: 4},
	elevation: 2,
  },
  primaryButtonText: {
	fontSize: 18,
	fontWeight: '700',
	color: '#ffffff',
	letterSpacing: 0.6,
  },
  disabled: {
	opacity: 0.55,
  },
  secondaryActions: {
	flexDirection: 'row',
	justifyContent: 'center',
	gap: 18,
  },
  linkButton: {
	paddingVertical: 6,
	paddingHorizontal: 10,
  },
  linkText: {
	fontSize: 14,
	fontWeight: '700',
	color: '#4ec1b9',
  },
  feedback: {
	fontSize: 13,
	lineHeight: 20,
	color: '#7a8699',
  },
  feedbackVisible: {
	color: '#3f5f99',
	fontWeight: '600',
  },
  footer: {
	marginTop: 14,
	fontSize: 18,
	color: '#64748b',
	textAlign: 'center',
  },
  footerLink: {
	color: '#4ec1b9',
	fontWeight: '800',
  },
});

