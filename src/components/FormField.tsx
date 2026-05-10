import React from 'react';
import {StyleProp, StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';
import {formatCNPJ, formatCEP, formatPhone, formatTime} from '../utils/formatters';

export type FormFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
  autoComplete?:
    | 'email'
    | 'name'
    | 'off'
    | 'tel'
    | 'username'
    | 'password'
    | 'postal-code';
  maxLength?: number;
  maskType?: 'cnpj' | 'cep' | 'phone' | 'time';
  containerStyle?: StyleProp<ViewStyle>;
};

export default function FormField({
  label,
  value,
  onChangeText,
  placeholder,
  autoCapitalize = 'none',
  keyboardType = 'default',
  autoComplete = 'off',
  maxLength,
  maskType,
  containerStyle,
}: FormFieldProps) {
  const handleChangeText = (text: string) => {
    let formattedText = text;

    if (maskType === 'cnpj') {
      formattedText = formatCNPJ(text);
    } else if (maskType === 'cep') {
      formattedText = formatCEP(text);
    } else if (maskType === 'phone') {
      formattedText = formatPhone(text);
    } else if (maskType === 'time') {
      formattedText = formatTime(text);
    }

    onChangeText(formattedText);
  };

  return (
    <View style={[styles.fieldWrapper, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9aa6bd"
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fieldWrapper: {
    gap: 8,
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#24334a',
  },
  input: {
    minHeight: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#c7d4e8',
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#132238',
  },
});

