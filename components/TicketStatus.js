import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TicketStatus = ({ openCount, completedCount }) => {
  return (
    <View style={styles.container}>
      {/* Completed Tasks */}
      <View style={styles.statusBox}>
        <Text style={styles.statusTitle}>Completed</Text>
        <Text style={styles.statusCount}>{completedCount} tasks</Text>
      </View>
      
      {/* Open Tasks */}
      <View style={styles.statusBox}>
        <Text style={styles.statusTitle}>Open</Text>
        <Text style={styles.statusCount}>{openCount} tasks</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statusBox: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: 140,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusCount: {
    fontSize: 16,
    color: '#888',
  },
});

export default TicketStatus;