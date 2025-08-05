import { Image, StyleSheet, Platform, SafeAreaView, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { Fonts, TextFontStyles } from '@/constants/Fonts';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      {/* Instagram Logo */}
      <Image source={require('@/assets/images/ig-logo.png')} style={styles.logo} />

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Remember Me and Forgot Password */}
      <View style={styles.optionsRow}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
            {rememberMe && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
       <TouchableOpacity 
         style={styles.loginButton}
         onPress={() => router.push('/pages/feed')}
       >
         <Text style={styles.loginButtonText}>Login</Text>
       </TouchableOpacity>

      {/* Facebook Login Button */}
       <TouchableOpacity style={styles.facebookButton}>
         <Image 
           source={require('@/assets/images/facebook-icon.png')}
           style={styles.facebookIcon}
         />
         <Text style={styles.facebookButtonText}>Login with facebook</Text>
       </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separator}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separatorLine} />
      </View>

      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account ? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 60,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#dbdbdb',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#0095f6',
    borderColor: '#0095f6',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#262626',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#dd2a7b',
    fontWeight: '600',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#dd2a7b',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: 'white',
  },
  facebookButton: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#dd2a7b',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  facebookIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: 'contain',
  },
  facebookButtonText: {
    color: '#dd2a7b',
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ffffff',
  },
  separatorText: {
    marginHorizontal: 15,
    color: '#8e8e93',
    fontSize: 14,
    fontWeight: '600',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
    color: '#262626',
  },
  signUpLink: {
    fontSize: 14,
    color: '#dd2a7b',
    fontWeight: '600',
  },
}); 