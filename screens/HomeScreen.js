import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TicketItem from '../components/TicketItem';
import TicketStatus from '../components/TicketStatus';
import BottomMenuComponent from '../components/BottomMenuComponent';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { styles } from '../styles/HomeScreenStyle';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); // Detect if screen is in focus
  const [tickets, setTickets] = useState([]);
  const [openCount, setOpenCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const fetchTickets = async () => {
    try {
      const storedTickets = await AsyncStorage.getItem('tickets');
      const parsedTickets = storedTickets ? JSON.parse(storedTickets) : [];

      // Calculate the number of open and completed tickets
      const openTickets = parsedTickets.filter(ticket => ticket.status === 'Open').length;
      const completedTickets = parsedTickets.filter(ticket => ticket.status === 'Closed').length;

      setTickets(parsedTickets);
      setOpenCount(openTickets);
      setCompletedCount(completedTickets);
    } catch (e) {
      console.error("Failed to load tickets: ", e);
    }
  };

  // Fetch tickets whenever the screen comes into focus
  useEffect(() => {
    if (isFocused) {
      fetchTickets();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Tickets</Text>
      <TicketStatus openCount={openCount} completedCount={completedCount} />
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
      <BottomMenuComponent
        onMenuPress={(item) => navigation.navigate(item)}
        activeMenu="Tickets"
      />
    </View>
  );
};

export default HomeScreen;
