import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function GoogleButton({onPress}: {onPress: () => void}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View style={styles.iconWrap}>
        <View style={[styles.arc, styles.arcBlue]} />
        <View style={[styles.arc, styles.arcRed]} />
        <View style={[styles.arc, styles.arcYellow]} />
        <View style={[styles.arc, styles.arcGreen]} />
        <View style={styles.centerCutout} />
        <Text style={styles.icon}>G</Text>
      </View>
      <Text style={styles.text}>Criar conta com Google</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#d6ddeb',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 14,
    paddingHorizontal: 18,
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 3},
    elevation: 1,
  },
  iconWrap: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  arc: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: '#000',
  },
  arcBlue: {
    top: 0,
    left: 0,
    borderColor: '#4285F4',
    borderRightColor: 'transparent',
  },
  arcRed: {
    top: 0,
    right: 0,
    borderColor: '#EA4335',
    borderBottomColor: 'transparent',
  },
  arcYellow: {
    left: 0,
    bottom: 0,
    borderColor: '#FBBC05',
    borderTopColor: 'transparent',
  },
  arcGreen: {
    right: 0,
    bottom: 0,
    borderColor: '#34A853',
    borderLeftColor: 'transparent',
  },
  centerCutout: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  icon: {
    fontSize: 14,
    fontWeight: '900',
    color: '#4285F4',
    marginTop: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
    color: '#334155',
  },
});

