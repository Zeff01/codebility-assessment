import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function BottomNav() {
  return (
    <View style={styles.container}>
      {/* Home Icon */}
      <TouchableOpacity style={styles.navItem}>
        <MaterialCommunityIcons name="home-outline" size={24} color="#1f1f1f" />
      </TouchableOpacity>

      {/* Search Icon */}
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcon name="search" size={24} color="#1f1f1f" />
      </TouchableOpacity>

      {/* Add Box Icon */}
      <TouchableOpacity style={styles.navItem}>
        <MaterialCommunityIcons name="plus-box-outline" size={24} color="#1f1f1f" />
      </TouchableOpacity>

      {/* Heart (Like) Icon */}
      <TouchableOpacity style={styles.navItem}>
        <MaterialCommunityIcon name="heart-outline" size={24} color="#1f1f1f" />
      </TouchableOpacity>

      {/* Person (Profile) Icon */}
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcon name="person-outline" size={24} color="#1f1f1f" />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
    backgroundColor: 'white',
  },
  navItem: {
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    fontSize: 24,
  },
  activeIcon: {
    opacity: 1,
  },
}); 