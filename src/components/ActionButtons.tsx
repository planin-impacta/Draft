import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function ActionButtons({
  onClear,
  onDelete,
  onEdit,
  onSave,
  canSave,
}: {
  onClear: () => void;
  onDelete: () => void;
  onEdit: () => void;
  onSave: () => void;
  canSave: boolean;
}) {
  return (
    <View style={styles.actionsRow}>
      <Pressable style={[styles.linkButton, styles.linkButtonFlex]} onPress={onClear}>
        <Text style={styles.linkButtonText}>CANCELAR</Text>
      </Pressable>

      <Pressable style={[styles.actionButton, styles.deleteButton]} onPress={onDelete}>
        <Text style={styles.actionButtonText}>EXCLUIR</Text>
      </Pressable>

      <Pressable style={[styles.actionButton, styles.editButton]} onPress={onEdit}>
        <Text style={styles.actionButtonText}>EDITAR</Text>
      </Pressable>

      <Pressable
        style={[
          styles.actionButton,
          styles.saveButton,
          !canSave && styles.actionButtonDisabled,
        ]}
        onPress={onSave}
        disabled={!canSave}>
        <Text style={styles.actionButtonText}>SALVAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  linkButton: {
    paddingVertical: 14,
    paddingHorizontal: 6,
  },
  linkButtonFlex: {
    flexGrow: 1,
    minWidth: 120,
  },
  linkButtonText: {
    color: '#334155',
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  actionButton: {
    minWidth: 110,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#ffffff',
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  deleteButton: {
    backgroundColor: '#f3c74e',
  },
  editButton: {
    backgroundColor: '#6ec1e4',
  },
  saveButton: {
    backgroundColor: '#f48ab1',
  },
  actionButtonDisabled: {
    opacity: 0.5,
  },
});

