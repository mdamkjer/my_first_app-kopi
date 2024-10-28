import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/MoreScreenStyle'; 

const MoreItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MoreItem;