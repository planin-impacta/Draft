import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionSubtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    gap: 4,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#24334a',
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#7a8699',
  },
});

