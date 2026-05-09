import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ActionButtons from '../components/ActionButtons';
import FormField from '../components/FormField';
import SectionTitle from '../components/SectionTitle';
import {CompanyFormState} from '../types';

type Props = {
  form: CompanyFormState;
  canSave: boolean;
  feedback: string;
  onBack: () => void;
  onClear: () => void;
  onDelete: () => void;
  onEdit: () => void;
  onSave: () => void;
  onChangeField: (field: keyof CompanyFormState, value: string) => void;
};

export function CompanyScreen({
  form,
  canSave,
  feedback,
  onBack,
  onClear,
  onDelete,
  onEdit,
  onSave,
  onChangeField,
}: Props) {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.kicker}>Cadastro</Text>
        <Text style={styles.title}>Cadastro da Empresa</Text>
        <Text style={styles.subtitle}>Gerencie as informações principais da sua organização.</Text>
      </View>

      <View style={styles.card}>
        <SectionTitle title="Dados básicos" subtitle="Identificação e contato." />

        <View style={styles.fieldGrid}>
          <FormField
            label="Razão Social"
            placeholder="Nome jurídico da empresa"
            value={form.razaoSocial}
            onChangeText={value => onChangeField('razaoSocial', value)}
            autoCapitalize="words"
          />
          <FormField
            label="Nome Fantasia"
            placeholder="Como sua empresa é conhecida"
            value={form.nomeFantasia}
            onChangeText={value => onChangeField('nomeFantasia', value)}
            autoCapitalize="words"
          />
          <FormField
            label="CNPJ"
            placeholder="00.000.000/0000-00"
            value={form.cnpj}
            onChangeText={value => onChangeField('cnpj', value)}
            keyboardType="numeric"
            maskType="cnpj"
          />
          <FormField
            label="Inscrição Estadual"
            placeholder="Isento ou Número"
            value={form.inscricaoEstadual}
            onChangeText={value => onChangeField('inscricaoEstadual', value)}
          />
          <FormField
            label="E-mail Corporativo"
            placeholder="contato@empresa.com.br"
            value={form.emailCorporativo}
            onChangeText={value => onChangeField('emailCorporativo', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
          <FormField
            label="Telefone / WhatsApp"
            placeholder="(11) 99999-9999"
            value={form.telefoneWhatsapp}
            onChangeText={value => onChangeField('telefoneWhatsapp', value)}
            keyboardType="phone-pad"
            maskType="phone"
          />
        </View>

        <SectionTitle title="Endereço" subtitle="Localização da empresa." />

        <View style={styles.fieldGrid}>
          <FormField
            label="CEP"
            placeholder="00000-000"
            value={form.cep}
            onChangeText={value => onChangeField('cep', value)}
            keyboardType="numeric"
            maskType="cep"
          />
          <FormField
            label="Rua"
            placeholder="Nome da rua ou avenida"
            value={form.rua}
            onChangeText={value => onChangeField('rua', value)}
          />
          <FormField
            label="Número"
            placeholder="S/N"
            value={form.numero}
            onChangeText={value => onChangeField('numero', value)}
            keyboardType="numeric"
          />
          <FormField
            label="Complemento"
            placeholder="Apto, Sala, Bloco"
            value={form.complemento}
            onChangeText={value => onChangeField('complemento', value)}
          />
          <FormField
            label="Bairro"
            placeholder="Bairro"
            value={form.bairro}
            onChangeText={value => onChangeField('bairro', value)}
          />
          <FormField
            label="Cidade"
            placeholder="Cidade"
            value={form.cidade}
            onChangeText={value => onChangeField('cidade', value)}
          />
          <FormField
            label="Estado"
            placeholder="UF"
            value={form.estado}
            onChangeText={value => onChangeField('estado', value.toUpperCase())}
            maxLength={2}
            autoCapitalize="characters"
            autoComplete="off"
          />
        </View>

        <View style={styles.backRow}>
          <Pressable style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>VOLTAR</Text>
          </Pressable>
        </View>

        <ActionButtons
          onClear={onClear}
          onDelete={onDelete}
          onEdit={onEdit}
          onSave={onSave}
          canSave={canSave}
        />
      </View>

      <Text style={[styles.feedback, feedback ? styles.feedbackVisible : null]}>
        {feedback || 'Complete o cadastro da empresa.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    gap: 16,
    backgroundColor: '#f8f8fb',
  },
  header: {
    gap: 8,
  },
  kicker: {
    color: '#4ec1b9',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#132238',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#63738a',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e4ebf5',
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 6},
    elevation: 2,
    gap: 18,
  },
  fieldGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  backRow: {
    alignItems: 'flex-start',
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  backButtonText: {
    color: '#4ec1b9',
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  feedback: {
    color: '#7a8699',
    fontSize: 13,
    lineHeight: 20,
  },
  feedbackVisible: {
    color: '#3f5f99',
    fontWeight: '600',
  },
});
