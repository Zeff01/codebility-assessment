import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

interface CustomCheckboxProps {
  isChecked: boolean;
  onPress: () => void;
}

// Functional Checkbox Component
const CustomCheckbox = ({ isChecked, onPress }: CustomCheckboxProps) => {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={onPress}>
      {isChecked && <View style={styles.checkboxInner} />}
    </TouchableOpacity>
  );
};

const InstagramLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for the checkbox

  const InstagramLogo = () => (
    <Text style={styles.logoText}>Instagram</Text>
  );

  const FacebookLogo = () => (
    <Image 
      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' }}
      style={styles.facebookIcon} 
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <InstagramLogo />
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#8e8e8e"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#8e8e8e"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={styles.optionsRow}>
            <View style={styles.checkboxContainer}>
              <CustomCheckbox 
                isChecked={rememberMe} 
                onPress={() => setRememberMe(!rememberMe)} 
              />
              <Text style={styles.checkboxText}>Remember Me</Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Forgot password pressed')}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Login pressed')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookButton} onPress={() => console.log('Login with Facebook pressed')}>
            <View style={styles.facebookButtonContent}>
              <FacebookLogo />
              <Text style={styles.facebookButtonText}>Login with facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separatorLine} />
        </View>
        
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => console.log('Sign up pressed')}>
            <Text style={styles.signUpLinkText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontFamily: 'Billabong', 
    fontSize: 50,
    color: '#000',
    fontStyle: 'italic', 
    fontWeight: 'bold', 
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    color: '#000',
  },
  optionsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#8e8e8e',
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#3897f0',
  },
  checkboxText: {
    color: '#8e8e8e',
    fontSize: 12,
  },
  forgotPasswordText: {
    color: '#3897f0',
    fontSize: 12,
    fontWeight: '500',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#e73177',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  facebookButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#dbdbdb',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  facebookIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  facebookButtonText: {
    color: '#3b5998',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 30,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#dbdbdb',
  },
  separatorText: {
    marginHorizontal: 15,
    color: '#8e8e8e',
    fontSize: 14,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#8e8e8e',
    fontSize: 14,
  },
  signUpLinkText: {
    color: '#3897f0',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default InstagramLoginScreen;