import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
};

export function PasswordField({label, placeholder, value, onChangeText}: Props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8f9bb3"
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
        <Pressable onPress={() => setSecureTextEntry(prev => !prev)} style={styles.eyeButton}>
          <View style={styles.eyeIcon}>
            <View style={styles.eyeOutline} />
            <View style={styles.eyePupil} />
            {!secureTextEntry && <View style={styles.eyeSlash} />}
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#cfd8e5',
    backgroundColor: '#ffffff',
    paddingLeft: 16,
    paddingRight: 12,
  },
  input: {
    flex: 1,
    minHeight: 56,
    fontSize: 17,
    color: '#132238',
  },
  eyeButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  eyeIcon: {
    width: 22,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  eyeOutline: {
    width: 22,
    height: 14,
    borderRadius: 12,
    borderWidth: 1.6,
    borderColor: '#94a3b8',
    backgroundColor: 'transparent',
  },
  eyePupil: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#94a3b8',
  },
  eyeSlash: {
    position: 'absolute',
    width: 18,
    height: 1.6,
    borderRadius: 999,
    backgroundColor: '#94a3b8',
    transform: [{rotate: '-28deg'}],
  },
});

