import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { AuthColors } from '@/constants/AuthColors';
import { Theme } from '@/constants/Theme';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onToggle: () => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
};

export function Checkbox({ label, checked, onToggle, containerStyle, labelStyle }: CheckboxProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: Theme.sizes.checkboxSize,
    height: Theme.sizes.checkboxSize,
    borderWidth: 2,
    borderColor: AuthColors.checkboxBorder,
    borderRadius: Theme.borderRadius.sm,
    marginRight: Theme.spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AuthColors.checkboxBackground,
  },
  checkboxChecked: {
    backgroundColor: AuthColors.checkboxChecked,
    borderColor: AuthColors.borderChecked,
  },
  checkmark: {
    color: AuthColors.checkboxText,
    fontSize: Theme.fontSize.sm,
    fontWeight: 'bold',
  },
  label: {
    fontSize: Theme.fontSize.md,
    color: AuthColors.text,
  },
});

