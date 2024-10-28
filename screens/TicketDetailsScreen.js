import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { styles } from '../styles/DetailedTicketScreenStyle';

const TicketDetailsScreen = () => {
  const route = useRoute();
  const { ticketId } = route.params;
  const [ticket, setTicket] = useState(null);

  const fetchTicketDetails = async () => {
    try {
      const storedTickets = await AsyncStorage.getItem('tickets');
      const tickets = storedTickets ? JSON.parse(storedTickets) : [];
      const selectedTicket = tickets.find((t) => t.id === ticketId);
      setTicket(selectedTicket);
    } catch (error) {
      console.error("Failed to load ticket details:", error);
    }
  };

  const updateStatus = async (newStatus) => {
    try {
      const storedTickets = await AsyncStorage.getItem('tickets');
      const tickets = storedTickets ? JSON.parse(storedTickets) : [];
      const updatedTickets = tickets.map((t) => {
        if (t.id === ticketId) {
          return { ...t, status: newStatus };
        }
        return t;
      });

      await AsyncStorage.setItem('tickets', JSON.stringify(updatedTickets));
      setTicket((prevTicket) => ({ ...prevTicket, status: newStatus }));
      Alert.alert("Success", `Status changed to ${newStatus}`);
    } catch (error) {
      console.error("Failed to update status:", error);
      Alert.alert("Error", "Failed to update status");
    }
  };

  useEffect(() => {
    if (ticketId) {
      fetchTicketDetails();
    }
  }, [ticketId]);

  if (!ticket) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detailed Ticket</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Title</Text>
        <Text>{ticket.title}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text>{ticket.location}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Issue</Text>
        <Text>{ticket.issue}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other Comments</Text>
        <Text>{ticket.otherComment}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Date Reported</Text>
        <Text>{new Date(ticket.date).toLocaleDateString()}</Text>
      </View>

      {ticket.image && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Attached Image</Text>
          <Image source={{ uri: ticket.image }} style={styles.attachedImage} />
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Status</Text>
        <View style={styles.statusContainer}>
          <TouchableOpacity
            style={[styles.statusButton, ticket.status === 'Open' ? styles.activeButton : null]}
            onPress={() => updateStatus('Open')}
          >
            <Text style={styles.statusButtonText}>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.statusButton, ticket.status === 'Closed' ? styles.activeButton : null]}
            onPress={() => updateStatus('Closed')}
          >
            <Text style={styles.statusButtonText}>Closed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TicketDetailsScreen;
