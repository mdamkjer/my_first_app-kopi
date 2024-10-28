import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TicketItem from '../components/TicketItem';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { styles } from '../styles/TicketsScreenStyle';
import { Ionicons } from '@expo/vector-icons';

const TicketsScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [tickets, setTickets] = useState([]);

  // Fetch tickets from AsyncStorage
  const fetchTickets = async () => {
    try {
      const storedTickets = await AsyncStorage.getItem('tickets');
      if (storedTickets) setTickets(JSON.parse(storedTickets));
    } catch (e) {
      console.error("Failed to load tickets: ", e);
    }
  };

  // Fetch tickets when the screen is in focus
  useEffect(() => {
    if (isFocused) {
      fetchTickets();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tickets</Text>
      
      {/* Render the list of tickets */}
      <FlatList
        data={tickets}
        renderItem={({ item }) => (
          <TicketItem
            title={item.title}
            status={item.status}
            onPress={() => navigation.navigate('TicketDetails', { ticketId: item.id })}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Add Ticket Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateTicket')}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TicketsScreen;
