import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Instagram</Text>
      <TextInput
        placeholder="Enter your email address"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Enter your password"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.rememberRow}>
        <TouchableOpacity 
          style={styles.checkboxContainer}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
            {rememberMe && (
              <Ionicons name="checkmark" size={12} color="#000" />
            )}
          </View>
          <Text style={styles.rememberText}>Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => router.push("/home")}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fbBtn}>
        <View style={styles.fbContent}>
          <Ionicons name="logo-facebook" size={22} color="#1877f2" style={styles.fbIcon} />
          <Text style={styles.fbText}>Login with facebook</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      <Text style={styles.signUpText}>
        Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff", 
    paddingHorizontal: 24,
  },
  logoText: {
    fontFamily: "SpaceMono-Regular",
    fontSize: 50,
    fontWeight: "300",
    marginBottom: 50,
    color: "#000",
  },
  input: {
    width: "100%",
    height: 44,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 6,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#fafafa",
    fontSize: 14,
  },
  rememberRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    width: "100%", 
    marginBottom: 18,
    marginTop: 6,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: "#d0d0d0",
    borderRadius: 2,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  rememberText: {
    fontSize: 13,
    color: "#000",
  },
  forgot: { 
    color: "#e1306c",
    fontSize: 13,
  },
  loginBtn: { 
    backgroundColor: "#e1306c", 
    width: "100%", 
    height: 48,
    borderRadius: 8, 
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  loginText: { 
    color: "#fff", 
    fontWeight: "600",
    fontSize: 14,
  },
  fbBtn: { 
    borderWidth: 1, 
    borderColor: "#e1306c", 
    width: "100%", 
    height: 44,
    borderRadius: 8, 
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    backgroundColor: "#fff",
  },
  fbContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  fbIcon: {
    marginRight: 10,
  },
  fbText: { 
    color: "#e1306c", 
    fontWeight: "600",
    fontSize: 14,
  },
  orText: {
    fontSize: 14,
    color: "#8e8e8e",
    marginBottom: 24,
  },
  signUpText: { 
    color: "#000",
    fontSize: 14,
  },
  signUpLink: { 
    color: "#e1306c", 
    fontWeight: "600" 
  },
});