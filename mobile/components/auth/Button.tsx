import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, Image, ImageSourcePropType, ImageStyle } from 'react-native';
import { AuthColors } from '@/constants/AuthColors';
import { Theme } from '@/constants/Theme';
import { useButtonPress } from '@/hooks/useButtonPress';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'facebook';
  icon?: ImageSourcePropType;
  iconStyle?: ImageStyle;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export function Button({
  title,
  onPress,
  variant = 'primary',
  icon,
  iconStyle,
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  const { isPressed, onPressIn, onPressOut } = useButtonPress();

  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return [styles.primaryButton, isPressed && styles.primaryButtonPressed];
      case 'secondary':
        return [styles.secondaryButton, isPressed && styles.secondaryButtonPressed];
      case 'facebook':
        return [styles.facebookButton, isPressed && styles.facebookButtonPressed];
      default:
        return [styles.primaryButton, isPressed && styles.primaryButtonPressed];
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButtonText;
      case 'secondary':
        return styles.secondaryButtonText;
      case 'facebook':
        return styles.facebookButtonText;
      default:
        return styles.primaryButtonText;
    }
  };

  return (
    <TouchableOpacity
      style={[...getButtonStyle(), disabled && styles.buttonDisabled, style]}
      activeOpacity={0.8}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && (
        <Image
          source={icon}
          style={[styles.buttonIcon, iconStyle]}
          resizeMode="contain"
        />
      )}
      <Text style={[getTextStyle(), textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    width: '100%',
    height: Theme.sizes.buttonHeight,
    backgroundColor: AuthColors.primary,
    borderRadius: Theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.smd,
    shadowColor: Theme.shadow.color,
    shadowOffset: Theme.shadow.offset,
    shadowOpacity: Theme.shadow.opacity,
    shadowRadius: Theme.shadow.radius,
    elevation: Theme.shadow.elevation,
  },
  primaryButtonPressed: {
    backgroundColor: AuthColors.primaryPressed,
    transform: [Theme.transform.pressed],
    shadowOpacity: Theme.shadowPressed.opacity,
    elevation: Theme.shadowPressed.elevation,
  },
  primaryButtonText: {
    color: AuthColors.primaryText,
    fontSize: Theme.fontSize.lg,
    fontWeight: '600',
  },
  secondaryButton: {
    width: '100%',
    height: Theme.sizes.buttonHeight,
    backgroundColor: AuthColors.background,
    borderWidth: 1,
    borderColor: AuthColors.primary,
    borderRadius: Theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.lg,
  },
  secondaryButtonPressed: {
    backgroundColor: AuthColors.facebookButtonPressedBackground,
    borderColor: AuthColors.primaryPressed,
    transform: [Theme.transform.pressed],
  },
  secondaryButtonText: {
    color: AuthColors.primary,
    fontSize: Theme.fontSize.lg,
    fontWeight: '500',
  },
  facebookButton: {
    width: '100%',
    height: Theme.sizes.buttonHeight,
    backgroundColor: AuthColors.facebookButtonBackground,
    borderWidth: 1,
    borderColor: AuthColors.primary,
    borderRadius: Theme.borderRadius.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.lg,
  },
  facebookButtonPressed: {
    backgroundColor: AuthColors.facebookButtonPressedBackground,
    borderColor: AuthColors.primaryPressed,
    transform: [Theme.transform.pressed],
  },
  facebookButtonText: {
    color: AuthColors.primary,
    fontSize: Theme.fontSize.lg,
    fontWeight: '500',
  },
  buttonIcon: {
    width: Theme.sizes.facebookLogoSize,
    height: Theme.sizes.facebookLogoSize,
    marginRight: Theme.spacing.xs,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

