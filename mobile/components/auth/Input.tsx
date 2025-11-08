import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { AuthColors } from '@/constants/AuthColors';
import { Theme } from '@/constants/Theme';

type InputProps = TextInputProps & {
  error?: boolean;
};

export function Input({ style, error, ...props }: InputProps) {
  return (
    <TextInput
      style={[styles.input, error && styles.inputError, style]}
      placeholderTextColor={AuthColors.placeholder}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: Theme.sizes.inputHeight,
    backgroundColor: AuthColors.inputBackground,
    borderWidth: 1,
    borderColor: AuthColors.border,
    borderRadius: Theme.borderRadius.md,
    paddingHorizontal: Theme.spacing.smd,
    marginBottom: Theme.spacing.smd,
    fontSize: Theme.fontSize.lg,
    color: AuthColors.text,
  },
  inputError: {
    borderColor: AuthColors.primary,
  },
});

