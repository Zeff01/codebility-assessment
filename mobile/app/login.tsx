// app/login.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  // 🔒 Force light palette for this screen
  const C = Colors.light;

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Static credentials
  const VALID_USER = 'user@example.com';
  const VALID_PASS = 'pass123';

  const onLogin = () => {
    if (email.trim().toLowerCase() === VALID_USER && pwd === VALID_PASS) {
      setError(null);
      router.replace('/(tabs)');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: C.bg }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          {/* Wordmark */}
          <Text style={[styles.logo, { color: '#000' }]}>Instagram</Text>

          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={C.muted}
            style={[styles.input, { color: '#000', borderColor: C.border }]} // text forced black
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
          />

          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={C.muted}
            style={[styles.input, { color: '#000', borderColor: C.border }]} // text forced black
            secureTextEntry
            value={pwd}
            onChangeText={setPwd}
            returnKeyType="done"
            onSubmitEditing={onLogin}
          />

          {error ? <Text style={{ color: '#d00', marginTop: 4 }}>{error}</Text> : null}

          {/* Remember + Forgot */}
          <View style={styles.row}>
            <Pressable
              onPress={() => setRemember(r => !r)}
              style={({ pressed }) => [
                { flexDirection: 'row', alignItems: 'center', opacity: pressed ? 0.6 : 1 },
              ]}
            >
              <Ionicons name={remember ? 'checkbox' : 'square-outline'} size={18} color={C.muted} />
              <Text style={[styles.small, { color: C.muted, marginLeft: 8 }]}>Remember Me</Text>
            </Pressable>

            <Pressable onPress={() => {}} style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
              <Text style={[styles.small, { color: '#ff2d75', fontWeight: '600' }]}>
                Forgot password?
              </Text>
            </Pressable>
          </View>

          {/* Login button */}
          <Pressable
            onPress={onLogin}
            style={({ pressed }) => [
              styles.primaryBtn,
              { backgroundColor: C.tint, opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Text style={styles.primaryText}>Login</Text>
          </Pressable>

          {/* Facebook button */}
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [
              styles.fbBtn,
              { borderColor: C.border, opacity: pressed ? 0.85 : 1 },
            ]}
          >
            <Ionicons name="logo-facebook" size={18} color="#1877f2" />
            <Text style={styles.fbText}>Login with facebook</Text>
          </Pressable>

          {/* Footer */}
          <View style={{ alignItems: 'center', marginTop: 18 }}>
            <Text style={[styles.small, { color: C.muted }]}>OR</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
            <Text style={{ color: C.muted }}>Don't have an account ? </Text>
            <Pressable onPress={() => {}} style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
              <Text style={{ color: '#ff2d75', fontWeight: '600' }}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { paddingHorizontal: 24, paddingTop: 60, flex: 1, backgroundColor: '#fff' },
  logo: { fontSize: 36, fontWeight: '800', alignSelf: 'center', marginBottom: 32, letterSpacing: 0.5 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 8 },
  small: { fontSize: 13 },
  primaryBtn: { height: 48, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop: 12 },
  primaryText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  fbBtn: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
  },
  fbText: { color: '#111', fontSize: 15, fontWeight: '600' },
});
