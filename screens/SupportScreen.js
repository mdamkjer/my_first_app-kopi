import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';
import { styles } from '../styles/SupportScreenStyle';

const SupportScreen = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const maxMessageLength = 300;
  const supportNumber = '31953624';

  const sendSms = () => {
    if (!message.trim()) {
      Alert.alert('Error', 'Please enter a message before sending.');
      return;
    }

    const smsBody = `Subject: ${subject}\n\n${message}`;
    const smsUrl = `sms:${supportNumber}?body=${encodeURIComponent(smsBody)}`;

    Linking.openURL(smsUrl).catch(() => {
      Alert.alert('Error', 'Failed to open SMS app.');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Serviceknappen</Text>

      {/* Write Subject */}
      <Text style={styles.label}>Write Subject</Text>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={setSubject}
        placeholder="Enter subject"
      />

      {/* Write Message */}
      <Text style={styles.label}>Write Message</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter message"
        maxLength={maxMessageLength}
        multiline
      />
      <Text style={styles.charCount}>{`${message.length}/${maxMessageLength}`}</Text>

      {/* Send Button */}
      <TouchableOpacity style={styles.button} onPress={sendSms}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SupportScreen;
