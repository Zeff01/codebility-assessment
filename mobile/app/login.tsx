import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
    type PressableStateCallbackType,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {/* Logo */}
                    <Image source={require('../image-test/ig-resources/Instagram_logo.svg.png')} style={styles.logoImage} resizeMode="contain" />

                    {/* Inputs */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email address"
                            placeholderTextColor="#8E8E8E"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#8E8E8E"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Remember Me & Forgot Password */}
                    <View style={styles.row}>
                        <Pressable
                            style={styles.rememberMeRow}
                            onPress={() => setRememberMe(!rememberMe)}
                        >
                            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                                {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.rememberMeText}>Remember Me</Text>
                        </Pressable>

                        <Pressable onPress={() => { }}>
                            <Text style={styles.forgotPassword}>Forgot password?</Text>
                        </Pressable>
                    </View>

                    {/* Login Button */}
                    <Pressable
                        style={({ pressed }: PressableStateCallbackType) => [
                            styles.loginButton,
                            pressed && styles.loginButtonPressed,
                        ]}
                        onPress={() => router.replace('/(tabs)/feed')}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </Pressable>

                    {/* Facebook Login */}
                    <Pressable
                        style={({ pressed }: PressableStateCallbackType) => [
                            styles.facebookButton,
                            pressed && styles.facebookButtonPressed,
                        ]}
                        onPress={() => { }}
                    >
                        <Text style={styles.facebookIcon}>f</Text>
                        <Text style={styles.facebookButtonText}>Login with facebook</Text>
                    </Pressable>

                    {/* Divider */}
                    <Text style={styles.orText}>OR</Text>

                    {/* Sign Up */}
                    <View style={styles.signUpRow}>
                        <Text style={styles.signUpPrompt}>Don't have an account ? </Text>
                        <Pressable onPress={() => { }}>
                            <Text style={styles.signUpLink}>Sign up</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const MAGENTA = '#D82D7E';

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flexGrow: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
        paddingBottom: 40,
    },
    logo: {
        fontFamily: Platform.OS === 'ios' ? 'Snell Roundhand' : 'serif',
        fontSize: 50,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 40,
        fontStyle: 'italic',
        fontWeight: '400',
        letterSpacing: 1,
    },
    logoImage: {
        width: 180,
        height: 60,
        alignSelf: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        gap: 12,
        marginBottom: 14,
    },
    input: {
        height: 52,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 14,
        color: '#333333',
        backgroundColor: '#F9F9F9',
        letterSpacing: -0.5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 22,
    },
    rememberMeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1.5,
        borderColor: '#AAAAAA',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: MAGENTA,
        borderColor: MAGENTA,
    },
    checkmark: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '700',
        lineHeight: 14,
    },
    rememberMeText: {
        fontSize: 14,
        color: '#333333',
        letterSpacing: -0.5,
    },
    forgotPassword: {
        fontSize: 14,
        color: MAGENTA,
        fontWeight: '400',
        letterSpacing: -0.5,
    },
    loginButton: {
        backgroundColor: MAGENTA,
        borderRadius: 8,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    loginButtonPressed: {
        opacity: 0.82,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: -0.5,
    },
    facebookButton: {
        borderWidth: 1.5,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        height: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 22,
    },
    facebookButtonPressed: {
        opacity: 0.75,
    },
    facebookIcon: {
        fontSize: 20,
        color: '#1877F2',
        fontWeight: '800',
        lineHeight: 22,
    },
    facebookButtonText: {
        color: MAGENTA,
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: -0.5,
    },
    orText: {
        textAlign: 'center',
        color: '#8E8E8E',
        fontSize: 13,
        fontWeight: '400',
        marginBottom: 14,
        letterSpacing: -0.5,
    },
    signUpRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpPrompt: {
        fontSize: 14,
        color: '#333333',
        fontWeight: '400',
        letterSpacing: -0.5,
    },
    signUpLink: {
        fontSize: 14,
        color: MAGENTA,
        fontWeight: '600',
        letterSpacing: -0.5,
    },
});
