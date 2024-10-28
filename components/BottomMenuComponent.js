import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottomMenuComponent = ({ onMenuPress, activeMenu }) => {
  const menuItems = ['Support', 'Tickets', 'More'];

  return (
    <View style={styles.menu}>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => onMenuPress(item)}>
          <Text style={[styles.menuItem, activeMenu === item && styles.active]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  menuItem: {
    fontSize: 16,
    color: '#888',
  },
  active: {
    color: '#008000',
  },
});

export default BottomMenuComponent;
