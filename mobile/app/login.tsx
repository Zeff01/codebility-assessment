import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { useRouter } from "expo-router";
import LoginButton from "@/components/LoginButton";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Input from "@/components/Input";
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "@/components/Checkbox";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const showToast = (message: string) => {
  Toast.show({
    type: 'info',
    text1: message,
    position: 'bottom',
    visibilityTime: 2000,
  });
};

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("@/assets/Instagram_logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Input
        placeholder="Enter your email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Enter your password"
        secureTextEntry
      />
       
      <View style={styles.row}>
        <View style={styles.leftRow}>
          <Checkbox value={rememberMe} onValueChange={setRememberMe} />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>

        {/* forgot password */}
        <TouchableOpacity onPress={() => showToast("Forgot Password")}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <LoginButton
        title="Login"
        onPress={() => router.push("/(tabs)")}
      />

      {/* login with facebook */}
      <LoginButton
        title="Login with facebook"
        type="outline"
        icon="logo-facebook"
        iconPosition="left"
        onPress={() => Alert.alert("Login with Facebook pressed")}
        style={{margin: 20}}
      />

      <Text style={styles.or}>OR</Text>

      {/* signup */}
      <Text style={styles.signupText}>
        Don't have an account ? <Text style={styles.signup}
        onPress={() => Alert.alert("Create account pressed")}>Sign up</Text>
      </Text>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 40,
  },
  row: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  forgotText: {
    color: "#e91e63",
    fontWeight: "600",
    fontSize: 14,
  },
  or: {
    textAlign: "center",
    marginVertical: 20,
    color: "#999",
  },
  signupText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  signup: {
    color: "#FF2D87",
    fontWeight: "700",
  },
});
