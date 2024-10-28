import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../styles/TicketItemStyle';

const TicketItem = ({ title, status, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TicketItem;
