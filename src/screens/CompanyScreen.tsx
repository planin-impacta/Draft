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
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Nome Fantasia"
            placeholder="Como sua empresa é conhecida"
            value={form.nomeFantasia}
            onChangeText={value => onChangeField('nomeFantasia', value)}
            autoCapitalize="words"
            containerStyle={styles.gridItem}
          />
          <FormField
            label="CNPJ"
            placeholder="00.000.000/0000-00"
            value={form.cnpj}
            onChangeText={value => onChangeField('cnpj', value)}
            keyboardType="numeric"
            maskType="cnpj"
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Inscrição Estadual"
            placeholder="Isento ou Número"
            value={form.inscricaoEstadual}
            onChangeText={value => onChangeField('inscricaoEstadual', value)}
            containerStyle={styles.gridItem}
          />
          <FormField
            label="E-mail Corporativo"
            placeholder="contato@empresa.com.br"
            value={form.emailCorporativo}
            onChangeText={value => onChangeField('emailCorporativo', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Telefone / WhatsApp"
            placeholder="(11) 99999-9999"
            value={form.telefoneWhatsapp}
            onChangeText={value => onChangeField('telefoneWhatsapp', value)}
            keyboardType="phone-pad"
            maskType="phone"
            containerStyle={styles.gridItem}
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
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Rua"
            placeholder="Nome da rua ou avenida"
            value={form.rua}
            onChangeText={value => onChangeField('rua', value)}
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Número"
            placeholder="S/N"
            value={form.numero}
            onChangeText={value => onChangeField('numero', value)}
            keyboardType="numeric"
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Complemento"
            placeholder="Apto, Sala, Bloco"
            value={form.complemento}
            onChangeText={value => onChangeField('complemento', value)}
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Bairro"
            placeholder="Bairro"
            value={form.bairro}
            onChangeText={value => onChangeField('bairro', value)}
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Cidade"
            placeholder="Cidade"
            value={form.cidade}
            onChangeText={value => onChangeField('cidade', value)}
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Estado"
            placeholder="UF"
            value={form.estado}
            onChangeText={value => onChangeField('estado', value.toUpperCase())}
            maxLength={2}
            autoCapitalize="characters"
            autoComplete="off"
            containerStyle={styles.gridItem}
          />
        </View>

        <SectionTitle title="Funcionamento" subtitle="Horários e dias de atendimento." />

        <View style={styles.fieldGrid}>
          <FormField
            label="Horário de Abertura"
            placeholder="08:00"
            value={form.openingHour}
            onChangeText={value => onChangeField('openingHour', value)}
            maskType="time"
            keyboardType="numeric"
            maxLength={5}
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Horário de Fechamento"
            placeholder="18:00"
            value={form.closingHour}
            onChangeText={value => onChangeField('closingHour', value)}
            maskType="time"
            keyboardType="numeric"
            maxLength={5}
            containerStyle={styles.gridItem}
          />
          <FormField
            label="Dias de Funcionamento"
            placeholder="Segunda a Sexta"
            value={form.daysOpen}
            onChangeText={value => onChangeField('daysOpen', value)}
            autoCapitalize="words"
            containerStyle={styles.gridItem}
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
  gridItem: {
    flexGrow: 1,
    flexBasis: '48%',
    minWidth: 150,
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
