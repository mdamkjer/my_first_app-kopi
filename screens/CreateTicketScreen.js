import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image, ScrollView, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/CreateTicketScreenStyle';

const CreateTicketScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [issue, setIssue] = useState('');
  const [otherComment, setOtherComment] = useState('');
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date());

  const issuesByLocation = {
    Toilet: ['Mangler toiletpapir', 'Toilet virker ikke', 'Vandhane i stykker', 'Lås virker ikke'],
    Lokale: ['Lys virker ikke', 'Tavle virker ikke', 'Mangler tuscer'],
    Kantine: ['Lys virker ikke', 'Automat virker ikke', 'Mangler personale'],
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const saveTicket = async () => {
    if (!title || !location || !issue) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    const newTicket = {
      id: Date.now().toString(),
      title,
      location,
      issue,
      otherComment,
      image,
      status: 'Open',
      date: date.toISOString(),
    };

    try {
      const storedTickets = await AsyncStorage.getItem('tickets');
      const tickets = storedTickets ? JSON.parse(storedTickets) : [];
      tickets.push(newTicket);
      await AsyncStorage.setItem('tickets', JSON.stringify(tickets));
      navigation.navigate('Tickets');
    } catch (error) {
      console.error("Error saving ticket:", error);
    }
  };

  // Set up header with "Save Ticket" button in the top right corner
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={saveTicket} style={{ marginRight: 10 }}>
          <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, saveTicket]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create Ticket</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        onBlur={() => Keyboard.dismiss()}
      />

      <Text style={styles.label}>Location</Text>
      <Picker
        selectedValue={location}
        onValueChange={(value) => {
          Keyboard.dismiss();
          setLocation(value);
          setIssue('');
        }}
        style={styles.picker}
      >
        <Picker.Item label="Select Location" value="" />
        <Picker.Item label="Toilet" value="Toilet" />
        <Picker.Item label="Lokale" value="Lokale" />
        <Picker.Item label="Kantine" value="Kantine" />
      </Picker>

      {location && (
        <>
          <Text style={styles.label}>Issue</Text>
          <Picker
            selectedValue={issue}
            onValueChange={(value) => {
              Keyboard.dismiss();
              setIssue(value);
            }}
            style={styles.picker}
          >
            <Picker.Item label="Select Issue" value="" />
            {issuesByLocation[location].map((issue, index) => (
              <Picker.Item key={index} label={issue} value={issue} />
            ))}
          </Picker>
        </>
      )}

      <TextInput
        style={styles.input}
        placeholder="Other comments"
        value={otherComment}
        onChangeText={setOtherComment}
        onBlur={() => Keyboard.dismiss()}
        multiline
      />

      <Text style={styles.label}>Date Reported: {date.toLocaleDateString()}</Text>

      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.addImageText}>+ Add Image</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateTicketScreen;
