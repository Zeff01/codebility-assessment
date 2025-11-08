import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';

import { Input } from '@/components/auth/Input';
import { Button } from '@/components/auth/Button';
import { Checkbox } from '@/components/auth/Checkbox';
import { AuthColors } from '@/constants/AuthColors';
import { Theme } from '@/constants/Theme';
import { Strings } from '@/constants/strings';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  const handleFacebookLogin = () => {
    router.replace('/(tabs)');
  };

  const handleForgotPassword = () => {
    // TODO: Implement forgot password functionality
  };

  const content = (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.content}>
            <Image
              source={require('@/assets/images/Instagram_logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Input
              placeholder={Strings.auth.emailPlaceholder}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Input
              placeholder={Strings.auth.passwordPlaceholder}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />

            <View style={styles.optionsRow}>
              <Checkbox
                label={Strings.auth.rememberMe}
                checked={rememberMe}
                onToggle={() => setRememberMe(!rememberMe)}
              />

              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPassword}>{Strings.auth.forgotPassword}</Text>
              </TouchableOpacity>
            </View>

            <Button
              title={Strings.auth.login}
              onPress={handleLogin}
              variant="primary"
            />

            <Button
              title={Strings.auth.loginWithFacebook}
              onPress={handleFacebookLogin}
              variant="facebook"
              icon={require('@/assets/images/FB_Logo.png')}
            />

            <View style={styles.separatorContainer}>
              <Text style={styles.separatorText}>{Strings.auth.or}</Text>
            </View>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>{Strings.auth.signUpText}</Text>
              <Link href="/signup">
                <Text style={styles.signUpLink}>{Strings.auth.signUp}</Text>
              </Link>
            </View>
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'web' ? (
        content
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          {content}
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AuthColors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.xl,
    paddingVertical: Theme.spacing.lg,
  },
  logo: {
    width: Theme.sizes.logoWidth,
    height: Theme.sizes.logoHeight,
    marginBottom: Theme.spacing.xxxl,
  },
  optionsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.lg,
  },
  forgotPassword: {
    fontSize: Theme.fontSize.md,
    color: AuthColors.link,
    fontWeight: '500',
  },
  separatorContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.spacing.lg,
  },
  separatorText: {
    fontSize: Theme.fontSize.md,
    color: AuthColors.textSecondary,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: Theme.fontSize.md,
    color: AuthColors.text,
  },
  signUpLink: {
    fontSize: Theme.fontSize.md,
    color: AuthColors.link,
    fontWeight: '500',
  },
});

