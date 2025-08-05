import { Fonts } from '@/constants/Fonts';
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IGLogo from '@/assets/images/ig-logo.png';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton}>
        <MCIcon name="camera-outline" size={24} color="#1f1f1f" />
      </TouchableOpacity>

      <Image source={IGLogo} style={styles.logo} />

      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <MCIcon
            name="send-outline"
            size={24}
            color="#1f1f1f"
            style={styles.rotatedIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    backgroundColor: 'white',
  },
  logo: {
    width: 120,
    height: 35,
    resizeMode: 'contain',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  rotatedIcon: {
    transform: [{ rotate: '325deg' }],
  },
  iconButton: {
    padding: 5,
  },
});
