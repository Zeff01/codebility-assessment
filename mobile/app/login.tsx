import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
    const router = useRouter();
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/instagram.png')}
                style={styles.logoImage}
                resizeMode="contain"
            />
            <TextInput placeholder="Enter your email address" style={styles.input} />
            <TextInput placeholder="Enter your password" secureTextEntry style={styles.input} />

            {/* Remember Me Row */}
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setRememberMe(!rememberMe)}
                >
                    <View style={[styles.checkbox, rememberMe && styles.checked]}>
                        {rememberMe && <Feather name="check" size={16} color="#fff" />}
                    </View>
                    <Text style={styles.rememberMeText}>Remember Me</Text>
                </TouchableOpacity>

                <Text style={styles.link}>Forgot password?</Text>
            </View>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => router.replace("/(tabs)")}
            >
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fbBtn}>
                <View style={styles.fbContent}>
                    <Image
                        source={require('../assets/images/facebook.png')} // adjust path
                        style={styles.fbIconImage}
                        resizeMode="contain"
                    />
                    <Text style={styles.fbText}>Login with Facebook</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.Or}>
                <Text >OR</Text>
            </Text>

            <Text style={styles.footer}>
                Don't have an account? <Text style={styles.link}>Sign up</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    input: { width: "100%", borderWidth: 1, borderColor: "#ccc", padding: 12, marginBottom: 12, borderRadius: 6 },
    row: { flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 20, alignItems: "center" },
    link: { color: "deeppink", fontWeight: "500" },
    loginBtn: { backgroundColor: "deeppink", padding: 15, borderRadius: 6, width: "100%", alignItems: "center", marginBottom: 10 },
    loginText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
    fbBtn: {
        backgroundColor: "#fff", // white background
        borderWidth: 1,
        borderColor: "deeppink", // pink border
        padding: 15,
        borderRadius: 6,
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
    },

    fbContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    fbIconImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },

    fbIcon: {
        marginRight: 10,
    },

    fbText: {
        color: "deeppink",
        fontWeight: "bold",
        fontSize: 16,
    },


    footer: { marginTop: 10 },
    logoImage: { width: 150, height: 100 },

    /* Checkbox Styles */
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    checked: { backgroundColor: "deeppink", borderColor: "deeppink" },
    rememberMeText: { fontSize: 16 },
    Or: {
        color: "gray",
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center"
    },

});
