import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
        <Link href="/login">
          <Text style={styles.link}>Go to Login</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  link: {
    color: '#E91E63',
    fontSize: 16,
  },
});

